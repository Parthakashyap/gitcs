import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';
import SecondSection from '@/components/SecondSection';
import FourthSection from '@/components/FourthSection';
import FifthSection from '@/components/FifthSection';
import HearFromUs from '@/components/hereFromUs';
import NetworkingGrid from '@/components/networking';
import TopDestination from '@/components/topDestination';

// Dynamically import client components
const SixthSection = dynamic(() => import('@/components/SixthSection'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <SecondSection />
      <FourthSection />
      <HearFromUs/>
      <TopDestination/>
      <FifthSection />
      <NetworkingGrid/>
      <SixthSection />
      <Footer />
    </main>
  );
}