import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Senthur Velavan Traders Pvt Ltd - Premium Agriculture Products Export | Tamil Nadu India',
    template: '%s | Senthur Velavan Traders Pvt Ltd',
  },
  description: 'Leading exporter of premium agriculture products including turmeric powder, turmeric fingers, fresh bananas, mango pulp, spices, and processed foods from Tamil Nadu, India. HACCP certified, organic certified, export quality products for international markets. Serving 25+ countries with sustainable farming practices.',
  keywords: ['Senthur Velavan Traders Pvt Ltd', 'Senthur Velavan Traders Private Limited', 'SVT', 'agriculture export India', 'turmeric export', 'banana export', 'mango pulp export', 'spices export', 'Tamil Nadu agriculture export', 'HACCP certified', 'organic certified'],
  authors: [{ name: 'Senthur Velavan Traders Pvt Ltd' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://senthurvelavantraders.com/',
    title: 'Senthur Velavan Traders Pvt Ltd - Premium Agriculture Products Export | Tamil Nadu India',
    description: 'Leading exporter of premium agriculture products including turmeric, bananas, mango pulp, and spices from Tamil Nadu, India. HACCP certified, serving 25+ countries worldwide.',
    images: [{ url: 'https://senthurvelavantraders.com/logo.svg', width: 1200, height: 630 }],
    siteName: 'Senthur Velavan Traders Pvt Ltd',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senthur Velavan Traders Pvt Ltd - Premium Agriculture Products Export | Tamil Nadu India',
    description: 'Leading exporter of premium agriculture products including turmeric, bananas, mango pulp, and spices from Tamil Nadu, India. HACCP certified, serving 25+ countries worldwide.',
    images: ['https://senthurvelavantraders.com/logo.svg'],
  },
  alternates: {
    canonical: 'https://senthurvelavantraders.com/',
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Coimbatore, Tamil Nadu, India',
    'geo.position': '11.0168;76.9558',
    ICBM: '11.0168, 76.9558',
    'revisit-after': '7 days',
    language: 'English',
  },
  icons: {
    icon: [
      { url: '/logo.svg', sizes: '32x32' },
      { url: '/logo.svg', sizes: '16x16' },
    ],
    apple: '/logo.svg',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Senthur Velavan Traders Private Limited',
  alternateName: 'Senthur Velavan Traders Pvt Ltd',
  url: 'https://senthurvelavantraders.com',
  logo: 'https://senthurvelavantraders.com/logo.svg',
  description: 'Leading exporter of premium agriculture products including turmeric, bananas, mango pulp, and spices from Tamil Nadu, India.',
  foundingDate: '2025',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2/108B, Velliankadu, Mettuppalayam',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641104',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-7010501482',
      contactType: 'sales',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-6369054818',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  ],
  email: 'senthurvelavantraders16@gmail.com',
  vatID: '33ABRCS5820R1ZJ',
  taxID: 'U46305TZ2025PTC036358',
  sameAs: ['https://www.linkedin.com/company/senthur-velavan-traders'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agriculture Products',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Product', name: 'Turmeric', description: 'Premium quality turmeric powder and fingers' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Product', name: 'Bananas', description: 'Fresh bananas from Tamil Nadu' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Product', name: 'Mango Pulp', description: 'Pure mango pulp for food processing' },
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
