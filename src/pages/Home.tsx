import { Hero } from '../components/home/Hero';
import { Stats } from '../components/home/Stats';
import { Services } from '../components/home/Services';
import { WorkProcess } from '../components/home/WorkProcess';
import { CTA } from '../components/home/CTA';

export default function Home() {
  return (
    <div className="pt-20 overflow-x-hidden">
      <Hero />
      <Stats />
      <Services />
      <WorkProcess />
      <CTA />
    </div>
  );
}
