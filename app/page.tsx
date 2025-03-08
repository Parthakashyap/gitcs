import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';
import SecondSection from '@/components/SecondSection';
import ThirdSection from '@/components/ThirdSection';
import FourthSection from '@/components/FourthSection';
import FifthSection from '@/components/FifthSection';
import HearFromUs from '@/components/hereFromUs';
import NetworkingGrid from '@/components/networking';

// Dynamically import client components
const SixthSection = dynamic(() => import('@/components/SixthSection'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <SecondSection />
      <FourthSection />
      <HearFromUs/>
      <FifthSection />
      <NetworkingGrid/>
      <SixthSection />
      <Footer />
    </main>
  );
}