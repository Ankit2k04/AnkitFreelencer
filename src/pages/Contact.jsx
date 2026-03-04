import { ContactInfo } from '../components/contact/ContactInfo';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactMap } from '../components/contact/ContactMap';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <ContactInfo />
          <ContactForm />
        </div>
        <ContactMap />
      </div>
    </div>
  );
}
