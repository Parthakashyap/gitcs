import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';
import SecondSection from '@/components/SecondSection';
import ThirdSection from '@/components/ThirdSection';
import FourthSection from '@/components/FourthSection';
import FifthSection from '@/components/FifthSection';

// Dynamically import client components
const SixthSection = dynamic(() => import('@/components/SixthSection'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </main>
  );
}