import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Facilities from '@/components/Facilities/Facilities';
import Schedule from '@/components/Schedule/Schedule';
import Trainers from '@/components/Trainers/Trainers';
import Events from '@/components/Events/Events';
import Media from '@/components/Media/Media';
import Testimonials from '@/components/Testimonials/Testimonials';
import Pricing from '@/components/Pricing/Pricing';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Facilities />
      <Schedule />
      <Trainers />
      <Events />
      <Media />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
