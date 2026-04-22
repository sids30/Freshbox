import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — FreshBox',
  description: 'Privacy Policy for FreshBox — how we collect, use, and protect your information.',
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

const sections: { title: string; content: React.ReactNode }[] = [
  { title: '1. Introduction', content: 'FreshBox is committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights regarding your personal information.' },
  { title: '2. Who We Are', content: <>FreshBox is a farm-to-door produce subscription service based in Ontario, Canada. Contact: <a href="mailto:hello@freshbox.ca" style={s.link}>hello@freshbox.ca</a>.</> },
  { 
    title: '3. What Data We Collect', 
    content: (
      <>
        <p style={{ marginBottom: 10 }}>We collect three categories of data:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
          <li style={{ marginBottom: 8 }}><strong>Account Data:</strong> when you sign up we collect your first name, last name, email address, delivery address, and phone number. Your password is stored in encrypted form using bcrypt hashing.</li>
          <li style={{ marginBottom: 8 }}><strong>Order and Subscription Data:</strong> we store your box size preference, delivery day, subscription status, and order history including delivery dates and amounts paid. This data is stored in our PostgreSQL database.</li>
          <li><strong>Analytics Data:</strong> we use Google Analytics 4 which automatically collects page views, session duration, device type, browser type, approximate geographic location based on IP address, and user interactions on our website. GA4 uses cookies to track this information. We do not collect personally identifiable information through GA4.</li>
        </ul>
      </>
    ) 
  },
  { title: '4. How We Use Your Data', content: 'Account data is used to create and manage your account and process your subscription. Order data is used to fulfill your weekly deliveries and send transactional emails including order confirmations and welcome emails via Resend. Analytics data is used to understand how users interact with our website and improve our service.' },
  { title: '5. Email Communications', content: 'By creating an account you will receive transactional emails such as welcome emails and order confirmations. These are sent using the Resend email service. We comply with CASL for all email communications. You may opt out of non-essential emails at any time.' },
  { title: '6. Cookies', content: 'Google Analytics 4 uses first-party cookies to distinguish users and track sessions. These cookies include _ga (expires 2 years), _ga_XXXXXXXXXX (expires 2 years), and _gid (expires 24 hours). You can disable cookies in your browser settings however this may affect site functionality.' },
  { title: '7. Data Storage and Security', content: 'Your data is stored in a PostgreSQL database hosted via Docker. Passwords are hashed using bcrypt and never stored in plain text. We use HTTPS for all data transmission. We retain your data for as long as your account is active.' },
  { title: '8. Third Party Services', content: 'We use Google Analytics 4 (Google LLC) for website analytics, Resend for transactional email delivery, and local farm partners who receive only the delivery information necessary to fulfill your order.' },
  { title: '9. PIPEDA Compliance', content: <>As a Canadian business FreshBox complies with the Personal Information Protection and Electronic Documents Act. You have the right to access the personal information we hold about you, request corrections to inaccurate information, and request deletion of your data. To exercise these rights contact <a href="mailto:hello@freshbox.ca" style={s.link}>hello@freshbox.ca</a>.</> },
  { title: '10. GDPR Compliance', content: <>For users in the European Union, we process your data on the basis of contract fulfillment for account and order data, and legitimate interest for analytics data. EU users have the right to access, rectify, erase, and port their data, and the right to object to processing. Contact <a href="mailto:hello@freshbox.ca" style={s.link}>hello@freshbox.ca</a> to exercise these rights.</> },
  { title: '11. User Rights', content: <>Regardless of location you may request to view, correct, or delete your personal data at any time by emailing <a href="mailto:hello@freshbox.ca" style={s.link}>hello@freshbox.ca</a>. We will respond within 30 days.</> },
  { title: '12. Changes to This Policy', content: 'We may update this Privacy Policy at any time. We will notify users of significant changes by email. Continued use of the service constitutes acceptance.' },
  { title: '13. Contact', content: <>For privacy questions or to exercise your rights contact <a href="mailto:hello@freshbox.ca" style={s.link}>hello@freshbox.ca</a>.</> },
];

export default function PrivacyPage() {
  return (
    <div style={s.page}>
      <Navbar />
      <section style={s.section}>
        <div style={s.inner}>
          <div style={s.pageHeader}>
            <h1 style={s.h1}>Privacy Policy</h1>
            <p style={s.date}>Last updated: April 2025</p>
          </div>
          <div style={s.sections}>
            {sections.map((sec) => (
              <div key={sec.title} style={s.card}>
                <h2 style={s.cardTitle}>{sec.title}</h2>
                <div style={s.cardText}>{sec.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
