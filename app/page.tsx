import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'FreshBox — Fresh Local Produce Delivered',
  description: 'FreshBox delivers fresh, locally sourced fruits and vegetables from nearby farms straight to your door. Subscribe today for weekly produce boxes.',
};

const s: Record<string, React.CSSProperties> = {
  page: { display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8F4E3', fontFamily: 'Inter, sans-serif' },

  // Hero
  hero: {
    background: 'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)',
    padding: '96px 24px',
    textAlign: 'center',
  },
  heroInner: { maxWidth: 800, margin: '0 auto' },
  heroH1: { fontSize: 52, fontWeight: 800, color: '#ffffff', marginBottom: 20, lineHeight: 1.15, letterSpacing: '-1px' },
  heroP: { fontSize: 20, color: '#d1fae5', marginBottom: 40, lineHeight: 1.6, maxWidth: 600, margin: '0 auto 40px' },
  heroBtn: {
    display: 'inline-block',
    backgroundColor: '#E76F51',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '16px 40px',
    borderRadius: 50,
    fontSize: 18,
    fontWeight: 700,
    boxShadow: '0 4px 20px rgba(231,111,81,0.5)',
    transition: 'opacity 0.2s, transform 0.2s',
  },

  // How it works
  section: { padding: '80px 24px', backgroundColor: '#F8F4E3' },
  sectionInner: { maxWidth: 1100, margin: '0 auto' },
  sectionH2: { fontSize: 38, fontWeight: 800, color: '#2D6A4F', textAlign: 'center', marginBottom: 56, letterSpacing: '-0.5px' },
  grid3: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 },

  // Step card
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 36,
    textAlign: 'center',
    boxShadow: '0 2px 16px rgba(45,106,79,0.08)',
    border: '1px solid #e6f4ec',
    transition: 'box-shadow 0.2s',
  },
  cardEmoji: { fontSize: 48, marginBottom: 16, display: 'block' },
  cardStep: { fontSize: 12, fontWeight: 700, color: '#E76F51', letterSpacing: 3, textTransform: 'uppercase' as const, marginBottom: 10 },
  cardTitle: { fontSize: 20, fontWeight: 700, color: '#2D6A4F', marginBottom: 12 },
  cardDesc: { fontSize: 15, color: '#6b7280', lineHeight: 1.65 },
};

export default function Home() {
  return (
    <div style={s.page}>
      <Navbar />

      {/* Hero */}
      <section style={s.hero}>
        <div style={s.heroInner}>
          <h1 style={s.heroH1}>Farm Fresh, Delivered to Your Door</h1>
          <p style={s.heroP}>
            Weekly produce boxes sourced from local farms within 150km of you. No grocery stores. No middlemen. Just fresh.
          </p>
          <Link href="/pricing" style={s.heroBtn}>Start Your Subscription</Link>
        </div>
      </section>

      {/* How It Works */}
      <section style={s.section}>
        <div style={s.sectionInner}>
          <h2 style={s.sectionH2}>How FreshBox Works</h2>
          <div style={s.grid3}>
            <StepCard emoji="📦" step="Step 1" title="Choose Your Box" desc="Choose your box size: small, medium, or large — perfect for any household size." />
            <StepCard emoji="🌾" step="Step 2" title="Freshly Harvested" desc="We harvest from local farms within 48 hours of delivery so you always get peak freshness." />
            <StepCard emoji="🚚" step="Step 3" title="Delivered to You" desc="Fresh produce arrives at your door on your chosen delivery day, every single week." />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StepCard({ emoji, step, title, desc }: { emoji: string; step: string; title: string; desc: string }) {
  return (
    <div style={s.card}>
      <span style={s.cardEmoji}>{emoji}</span>
      <p style={s.cardStep}>{step}</p>
      <h3 style={s.cardTitle}>{title}</h3>
      <p style={s.cardDesc}>{desc}</p>
    </div>
  );
}
