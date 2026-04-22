import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'How It Works — FreshBox',
  description: 'Learn how FreshBox delivers fresh local produce from nearby farms straight to your door.',
};

const s: Record<string, React.CSSProperties> = {
  page: { display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8F4E3', fontFamily: 'Inter, sans-serif' },
  section: { padding: '80px 24px', flex: 1 },
  inner: { maxWidth: 860, margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: 56 },
  h1: { fontSize: 44, fontWeight: 800, color: '#2D6A4F', marginBottom: 14, letterSpacing: '-1px' },
  sub: { fontSize: 18, color: '#6b7280', maxWidth: 560, margin: '0 auto' },
  steps: { display: 'flex', flexDirection: 'column', gap: 24 },
  step: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: '32px 36px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 24,
    boxShadow: '0 2px 16px rgba(45,106,79,0.08)',
    border: '1px solid #e6f4ec',
  },
  numBubble: {
    minWidth: 52,
    height: 52,
    borderRadius: '50%',
    backgroundColor: '#2D6A4F',
    color: '#fff',
    fontSize: 18,
    fontWeight: 800,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(45,106,79,0.3)',
    flexShrink: 0,
  },
  stepContent: { flex: 1, paddingTop: 4 },
  stepTitle: { fontSize: 20, fontWeight: 700, color: '#2D6A4F', marginBottom: 8 },
  stepDesc: { fontSize: 15, color: '#6b7280', lineHeight: 1.65 },

  // CTA section
  cta: {
    background: 'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)',
    borderRadius: 24,
    padding: '64px 48px',
    textAlign: 'center',
    marginTop: 48,
  },
  ctaH2: { fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 12 },
  ctaP: { fontSize: 17, color: '#d1fae5', marginBottom: 32 },
  ctaBtn: {
    display: 'inline-block',
    backgroundColor: '#E76F51',
    color: '#fff',
    textDecoration: 'none',
    padding: '16px 40px',
    borderRadius: 50,
    fontWeight: 700,
    fontSize: 17,
    boxShadow: '0 4px 16px rgba(231,111,81,0.4)',
  },
};

const steps = [
  {
    num: '01',
    title: 'Choose Your Box',
    desc: 'Pick from Small, Medium, or Large box sizes based on your household. Whether you\'re cooking for one or feeding the whole family, we have the right box for you. View pricing →',
    link: { text: 'View pricing →', href: '/pricing' },
  },
  {
    num: '02',
    title: 'Customize Your Preferences',
    desc: 'Set your dietary preferences, exclude items you dislike, and update your choices anytime from your account dashboard. Your box, your way.',
  },
  {
    num: '03',
    title: 'We Harvest and Pack',
    desc: 'Our farm partners harvest produce within 48 hours of your delivery date. Each box is hand-packed and carefully inspected to ensure only the best quality reaches you.',
  },
  {
    num: '04',
    title: 'Delivered to Your Door',
    desc: 'Your box arrives on your chosen delivery day each week. Need a break? Skip or pause any week with absolutely no fees.',
  },
];

export default function HowItWorksPage() {
  return (
    <div style={s.page}>
      <Navbar />
      <section style={s.section}>
        <div style={s.inner}>
          <div style={s.header}>
            <h1 style={s.h1}>How FreshBox Works</h1>
            <p style={s.sub}>Getting fresh local produce delivered to your door is easier than you think.</p>
          </div>

          <div style={s.steps}>
            {steps.map((step) => (
              <div key={step.num} style={s.step}>
                <div style={s.numBubble}>{step.num}</div>
                <div style={s.stepContent}>
                  <h2 style={s.stepTitle}>{step.title}</h2>
                  <p style={s.stepDesc}>
                    {step.num === '01' ? (
                      <>
                        Pick from <strong>Small, Medium, or Large</strong> box sizes based on your household. Whether you&apos;re cooking for one or feeding the whole family, we have the right box for you.{' '}
                        <Link href="/pricing" style={{ color: '#E76F51', fontWeight: 600 }}>View pricing →</Link>
                      </>
                    ) : step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={s.cta}>
            <h2 style={s.ctaH2}>Ready to Get Started?</h2>
            <p style={s.ctaP}>Join thousands of households enjoying fresh, local produce every week.</p>
            <Link href="/pricing" style={s.ctaBtn}>View Pricing</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
