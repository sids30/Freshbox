import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service — FreshBox',
  description: 'Terms of Service for FreshBox subscriptions and services.',
};

const s: Record<string, React.CSSProperties> = {
  page: { display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8F4E3', fontFamily: 'Inter, sans-serif' },
  section: { padding: '80px 24px', flex: 1 },
  inner: { maxWidth: 760, margin: '0 auto' },
  pageHeader: { marginBottom: 40 },
  h1: { fontSize: 44, fontWeight: 800, color: '#2D6A4F', marginBottom: 8, letterSpacing: '-1px' },
  date: { fontSize: 14, color: '#9ca3af' },
  sections: { display: 'flex', flexDirection: 'column', gap: 20 },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: '32px 36px',
    boxShadow: '0 2px 16px rgba(45,106,79,0.08)',
    border: '1px solid #e6f4ec',
  },
  cardTitle: { fontSize: 18, fontWeight: 700, color: '#2D6A4F', marginBottom: 12 },
  cardText: { fontSize: 15, color: '#6b7280', lineHeight: 1.7 },
  link: { color: '#2D6A4F', textDecoration: 'underline' },
};

const sections = [
  { title: '1. Introduction', text: 'FreshBox is a farm-to-door produce subscription service operated in Ontario, Canada that delivers weekly boxes of locally sourced fruits and vegetables.' },
  { title: '2. Acceptance of Terms', text: 'By using FreshBox you agree to these terms which comply with PIPEDA and CASL.' },
  { title: '3. Description of Service', text: 'Weekly produce subscription boxes in Small ($24.99/week), Medium ($39.99/week), and Large ($54.99/week) sizes, sourced from farms within 150km, delivered to your door on your chosen day.' },
  { title: '4. User Accounts', text: 'Users must provide accurate registration information including name and email address. Users are responsible for maintaining the confidentiality of their account.' },
  { title: '5. Subscription and Billing', text: 'Subscriptions are billed weekly to the payment method on file. Users may skip, pause, or cancel at any time with no cancellation fees. Refunds are available within 24 hours of delivery if the customer is unsatisfied.' },
  { title: '6. Acceptable Use', text: 'Users may not use the service for any unlawful purpose, attempt to gain unauthorized access to the system, or misrepresent their identity.' },
  { title: '7. Intellectual Property', text: 'All FreshBox content including logos, text, and website design is the intellectual property of FreshBox and may not be reproduced without permission.' },
  { title: '8. Limitation of Liability', text: 'FreshBox is not liable for delays caused by weather, acts of nature, or circumstances beyond our control. Our liability is limited to the value of the affected delivery.' },
  { title: '9. Privacy and Data Collection', text: 'FreshBox collects personal data including name, email, delivery address, and payment information. We also use Google Analytics 4 to collect anonymized usage data. Data is handled in accordance with PIPEDA.' },
  { title: '10. Email Communications', text: 'By creating an account you consent to receive transactional emails such as order confirmations and welcome emails in accordance with CASL. You may unsubscribe from marketing emails at any time.' },
  { title: '11. PIPEDA Compliance', text: 'As a Canadian business FreshBox complies with the Personal Information Protection and Electronic Documents Act. Users have the right to access, correct, and request deletion of their personal data by contacting hello@freshbox.ca.' },
  { title: '12. GDPR Compliance', text: 'For users in the European Union, FreshBox processes data on the basis of contract fulfillment and legitimate interest. EU users have additional rights including the right to data portability and the right to be forgotten.' },
  { title: '13. Termination', text: 'FreshBox reserves the right to suspend or terminate accounts that violate these terms. Users may delete their account at any time by contacting hello@freshbox.ca.' },
  { title: '14. Changes to Terms', text: 'FreshBox may update these terms at any time. Continued use of the service after changes constitutes acceptance.' },
  { title: '15. Contact', text: 'contact' },
];
export default function TermsPage() {
  return (
    <div style={s.page}>
      <Navbar />
      <section style={s.section}>
        <div style={s.inner}>
          <div style={s.pageHeader}>
            <h1 style={s.h1}>Terms of Service</h1>
            <p style={s.date}>Last updated: April 2025</p>
          </div>
          <div style={s.sections}>
            {sections.map((sec) => (
              <div key={sec.title} style={s.card}>
                <h2 style={s.cardTitle}>{sec.title}</h2>
                {sec.text === 'contact' ? (
                  <p style={s.cardText}>
                    For questions about these terms contact{' '}
                    <a href="mailto:hello@freshbox.ca" style={s.link}>hello@freshbox.ca</a> or write to FreshBox, Ontario, Canada.
                  </p>
                ) : (
                  <p style={s.cardText}>{sec.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
