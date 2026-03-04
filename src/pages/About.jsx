import { AboutIntro } from '../components/about/AboutIntro';
import { TechnicalExpertise } from '../components/about/TechnicalExpertise';
import { CareerJourney } from '../components/about/CareerJourney';
import { EngineeringMindset } from '../components/about/EngineeringMindset';

export default function About() {
  return (
    <div className="pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <AboutIntro />
        <TechnicalExpertise />
        <CareerJourney />
        <EngineeringMindset />
      </div>
    </div>
  );
}
