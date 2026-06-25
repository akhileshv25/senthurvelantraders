#!/usr/bin/env python3
"""Compress oversized images in public/ to WebP under a size budget.

Scans the repo's `public/` tree for images (jpg/jpeg/png/webp) larger than
MAX_BYTES, and rewrites each as a WebP next to the source.

For each input file:
  - Open the image and apply EXIF rotation if present.
  - Convert to RGB.
  - Downsize so the longest edge is at most 1920 px (preserving aspect).
  - Save as WebP, iterating quality from 85 down to 55 (step -5).
  - If still over budget at q=55, drop the longest-edge cap to 1600,
    then 1280, retrying the quality loop each time.
  - Output is written next to the source as <basename>.webp.
  - The original raster (jpg/png) is left in place. WebP inputs are
    rewritten in place.

Idempotent: re-running simply rewrites the .webp output.
"""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageOps


REPO_ROOT = Path(__file__).resolve().parent.parent
PUBLIC_DIR = REPO_ROOT / "public"

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp"}
MAX_BYTES = 300_000
MAX_EDGE_SEQUENCE = (1920, 1600, 1280)
QUALITY_START = 85
QUALITY_MIN = 55
QUALITY_STEP = 5


def resize_to_max_edge(img: Image.Image, max_edge: int) -> Image.Image:
    """Return a copy of img resized so its longest edge is <= max_edge."""
    w, h = img.size
    longest = max(w, h)
    if longest <= max_edge:
        return img.copy()
    scale = max_edge / float(longest)
    new_w = max(1, int(round(w * scale)))
    new_h = max(1, int(round(h * scale)))
    return img.resize((new_w, new_h), Image.LANCZOS)


def try_save_webp(img: Image.Image, output_path: Path, quality: int) -> int:
    """Save img as WebP at the given quality. Returns final file size in bytes."""
    img.save(output_path, format="WEBP", quality=quality, method=6)
    return output_path.stat().st_size


def compress_one(input_path: Path) -> None:
    if not input_path.exists():
        print(f"SKIP: {input_path} not found", file=sys.stderr)
        return

    output_path = input_path.with_suffix(".webp")
    original_size = input_path.stat().st_size

    with Image.open(input_path) as raw:
        oriented = ImageOps.exif_transpose(raw)
        if oriented.mode != "RGB":
            oriented = oriented.convert("RGB")

        last_size = None
        last_quality = None
        last_dims = None

        for max_edge in MAX_EDGE_SEQUENCE:
            resized = resize_to_max_edge(oriented, max_edge)
            quality = QUALITY_START
            while quality >= QUALITY_MIN:
                size = try_save_webp(resized, output_path, quality)
                last_size = size
                last_quality = quality
                last_dims = resized.size
                if size <= MAX_BYTES:
                    w, h = resized.size
                    print(
                        f"{input_path.relative_to(REPO_ROOT)} "
                        f"({original_size} B) -> "
                        f"{output_path.relative_to(REPO_ROOT)} "
                        f"({size} B, q={quality}, {w}x{h})"
                    )
                    return
                quality -= QUALITY_STEP
            resized.close()

        w, h = last_dims if last_dims else (0, 0)
        print(
            f"{input_path.relative_to(REPO_ROOT)} "
            f"({original_size} B) -> "
            f"{output_path.relative_to(REPO_ROOT)} "
            f"({last_size} B, q={last_quality}, {w}x{h}) "
            f"WARNING: exceeds {MAX_BYTES} B target"
        )


def find_oversized_images(root: Path) -> list[Path]:
    results: list[Path] = []
    for path in root.rglob("*"):
        if not path.is_file():
            continue
        if path.suffix.lower() not in IMAGE_EXTS:
            continue
        try:
            if path.stat().st_size > MAX_BYTES:
                results.append(path)
        except OSError:
            continue
    results.sort()
    return results


def main() -> int:
    if not PUBLIC_DIR.is_dir():
        print(f"ERROR: {PUBLIC_DIR} does not exist", file=sys.stderr)
        return 1

    targets = find_oversized_images(PUBLIC_DIR)
    if not targets:
        print(f"No images over {MAX_BYTES} B under {PUBLIC_DIR}.")
        return 0

    print(f"Compressing {len(targets)} image(s) over {MAX_BYTES} B...")
    for input_path in targets:
        try:
            compress_one(input_path)
        except Exception as exc:
            print(f"ERROR: {input_path}: {exc}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
