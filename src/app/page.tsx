import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Premium Agriculture Products Export - Tamil Nadu India',
  description: 'Leading exporter of premium agriculture products including turmeric powder, turmeric fingers, fresh Cavendish bananas, Alphonso & Totapuri mango pulp, and spices from Tamil Nadu, India. HACCP certified, organic certified, serving 25+ countries worldwide with sustainable farming practices.',
  keywords: ['agriculture export India', 'turmeric export', 'banana export', 'mango pulp export', 'spices export', 'Indian agriculture products', 'Tamil Nadu agriculture export', 'HACCP certified', 'organic certified', 'sustainable agriculture', 'farm to export', 'international agriculture trade', 'Senthur Velavan Traders'],
  alternates: { canonical: 'https://senthurvelavantraders.com/' },
};

export default function HomePage() {
  return <HomeContent />;
}
