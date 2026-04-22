import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Us — FreshBox',
  description: 'Get in touch with FreshBox. Questions about your subscription or want to become a farm partner?',
};

const s: Record<string, React.CSSProperties> = {
  page: { display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8F4E3', fontFamily: 'Inter, sans-serif' },
  section: { padding: '80px 24px', flex: 1 },
  inner: { maxWidth: 720, margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: 48 },
  h1: { fontSize: 44, fontWeight: 800, color: '#2D6A4F', marginBottom: 14, letterSpacing: '-1px' },
  sub: { fontSize: 18, color: '#6b7280' },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: '36px 40px',
    boxShadow: '0 2px 16px rgba(45,106,79,0.08)',
    border: '1px solid #e6f4ec',
    marginTop: 28,
  },
  infoH2: { fontSize: 20, fontWeight: 700, color: '#2D6A4F', marginBottom: 24 },
  infoRow: { display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20 },
  infoEmoji: { fontSize: 22, marginTop: 2 },
  infoLabel: { fontSize: 12, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: 1, marginBottom: 4 },
  infoValue: { fontSize: 15, color: '#374151' },
  infoLink: { fontSize: 15, color: '#2D6A4F', textDecoration: 'none' },
};

export default function ContactPage() {
  return (
    <div style={s.page}>
      <Navbar />
      <section style={s.section}>
        <div style={s.inner}>
          <div style={s.header}>
            <h1 style={s.h1}>Get in Touch</h1>
            <p style={s.sub}>Have a question about your subscription or want to become a farm partner? We&apos;d love to hear from you.</p>
          </div>

          <ContactForm />

          <div style={s.infoCard}>
            <h2 style={s.infoH2}>Contact Information</h2>
            <div style={s.infoRow}>
              <span style={s.infoEmoji}>📧</span>
              <div>
                <p style={s.infoLabel}>Email</p>
                <a href="mailto:hello@freshbox.ca" style={s.infoLink}>hello@freshbox.ca</a>
              </div>
            </div>
            <div style={s.infoRow}>
              <span style={s.infoEmoji}>📞</span>
              <div>
                <p style={s.infoLabel}>Phone</p>
                <p style={s.infoValue}>1-800-FRESH-BOX</p>
              </div>
            </div>
            <div style={s.infoRow}>
              <span style={s.infoEmoji}>🕐</span>
              <div>
                <p style={s.infoLabel}>Hours</p>
                <p style={s.infoValue}>Monday–Friday 8am–6pm EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
