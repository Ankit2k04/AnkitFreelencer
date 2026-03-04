import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 text-center">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          
          <GlassCard className="p-8 md:p-12 space-y-8 text-zinc-400 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you fill out our contact form. This may include your name, email address, phone number, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to respond to your inquiries, provide the services you request, and communicate with you about our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
              <p>
                We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
              <p>
                We may use third-party services, such as Formspree for contact form submissions, which may collect information in accordance with their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at ankit2k04@gmail.com.
              </p>
            </section>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
