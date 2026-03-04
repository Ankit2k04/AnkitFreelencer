import { useState } from 'react';
import { faqs } from '../data/faqs';
import { FAQHeader } from '../components/faq/FAQHeader';
import { FAQItem } from '../components/faq/FAQItem';
import { FAQFooter } from '../components/faq/FAQFooter';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <FAQHeader />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i} 
              faq={faq} 
              isOpen={openIndex === i} 
              onToggle={() => setOpenIndex(openIndex === i ? null : i)} 
            />
          ))}
        </div>

        <FAQFooter />
      </div>
    </div>
  );
}
