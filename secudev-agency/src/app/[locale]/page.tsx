import Hero from '@/components/homepage/Hero';
import ServicesTeaser from '@/components/homepage/ServicesTeaser';
import Testimonials from '@/components/homepage/Testimonials';
import Stats from '@/components/homepage/Stats';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesTeaser />
      <Testimonials />
      <Stats />
    </>
  );
}
