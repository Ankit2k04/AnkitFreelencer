import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 text-center">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          
          <GlassCard className="p-8 md:p-12 space-y-8 text-zinc-400 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Freelance Services</h2>
              <p>
                We provide freelance frontend development, UI/UX design, and technical consulting services. The specific scope of services will be defined in a separate agreement or project proposal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Payments and Refunds</h2>
              <p className="text-emerald-400 font-bold">
                All payments are final and non-refundable. Once a project has commenced, no refunds will be issued for any reason.
              </p>
              <p>
                Payments must be made according to the schedule defined in the project proposal. Failure to make timely payments may result in a suspension of services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Revisions and Changes</h2>
              <p className="text-emerald-400 font-bold">
                A maximum of two (2) rounds of revisions are included in the initial project scope.
              </p>
              <p>
                Any additional revisions or changes requested beyond the initial two rounds will be subject to additional fees, which will be quoted separately based on the complexity of the request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p>
                Upon final payment, the client will own the intellectual property rights to the final deliverables, subject to any third-party licenses or pre-existing materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p>
                In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at ankit2k04@gmail.com.
              </p>
            </section>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
