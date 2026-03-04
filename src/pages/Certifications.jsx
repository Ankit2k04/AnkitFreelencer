import { certifications } from '../data/certifications';
import { CertificationsHeader } from '../components/certifications/CertificationsHeader';
import { CertificationCard } from '../components/certifications/CertificationCard';
import { VerifiedExpertise } from '../components/certifications/VerifiedExpertise';

export default function Certifications() {
  return (
    <div className="pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <CertificationsHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, i) => (
            <CertificationCard key={i} cert={cert} index={i} />
          ))}
        </div>

        <VerifiedExpertise />
      </div>
    </div>
  );
}
