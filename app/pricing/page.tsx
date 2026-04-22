import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Pricing — FreshBox',
  description: 'Choose your FreshBox subscription. Fresh, local produce delivered weekly.',
};

const s: Record<string, React.CSSProperties> = {
  page: { display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8F4E3', fontFamily: 'Inter, sans-serif' },
  section: { padding: '80px 24px', flex: 1 },
  inner: { maxWidth: 1100, margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: 56 },
  h1: { fontSize: 44, fontWeight: 800, color: '#2D6A4F', marginBottom: 14, letterSpacing: '-1px' },
  sub: { fontSize: 18, color: '#6b7280', maxWidth: 520, margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginBottom: 40 },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: '40px 32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 2px 16px rgba(45,106,79,0.08)',
    border: '2px solid #e6f4ec',
    position: 'relative',
  },
  cardPopular: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: '40px 32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 8px 32px rgba(231,111,81,0.2)',
    border: '2px solid #E76F51',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -16,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#E76F51',
    color: '#fff',
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: 2,
    textTransform: 'uppercase' as const,
    padding: '6px 18px',
    borderRadius: 50,
    whiteSpace: 'nowrap' as const,
    boxShadow: '0 2px 8px rgba(231,111,81,0.4)',
  },
  cardName: { fontSize: 22, fontWeight: 800, color: '#2D6A4F', marginBottom: 12 },
  priceRow: { display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 8, justifyContent: 'center' },
  price: { fontSize: 40, fontWeight: 800, color: '#2D6A4F' },
  per: { fontSize: 16, color: '#9ca3af', marginBottom: 6 },
  ideal: { fontSize: 14, color: '#9ca3af', marginBottom: 4 },
  items: { fontSize: 15, fontWeight: 600, color: '#374151', marginBottom: 28 },
  btnGreen: {
    display: 'block',
    width: '100%',
    backgroundColor: '#2D6A4F',
    color: '#fff',
    textDecoration: 'none',
    padding: '14px 0',
    borderRadius: 50,
    fontWeight: 700,
    fontSize: 15,
    textAlign: 'center' as const,
    boxShadow: '0 2px 8px rgba(45,106,79,0.2)',
  },
  btnOrange: {
    display: 'block',
    width: '100%',
    backgroundColor: '#E76F51',
    color: '#fff',
    textDecoration: 'none',
    padding: '14px 0',
    borderRadius: 50,
    fontWeight: 700,
    fontSize: 15,
    textAlign: 'center' as const,
    boxShadow: '0 2px 8px rgba(231,111,81,0.3)',
  },
  note: { textAlign: 'center' as const, fontSize: 14, color: '#9ca3af' },
};

const boxes = [
  { name: 'Small Box', price: '$24.99', ideal: 'Perfect for 1–2 people', items: '6–8 seasonal items', popular: false },
  { name: 'Medium Box', price: '$39.99', ideal: 'Perfect for 3–4 people', items: '10–12 seasonal items', popular: true },
  { name: 'Large Box', price: '$54.99', ideal: 'Perfect for families of 5+', items: '14–16 seasonal items', popular: false },
];

export default function PricingPage() {
  return (
    <div style={s.page}>
      <Navbar />
      <section style={s.section}>
        <div style={s.inner}>
          <div style={s.header}>
            <h1 style={s.h1}>Choose Your FreshBox</h1>
            <p style={s.sub}>Fresh, local produce delivered weekly. Find the right size for your household.</p>
          </div>
          <div style={s.grid}>
            {boxes.map((box) => (
              <div key={box.name} style={box.popular ? s.cardPopular : s.card}>
                {box.popular && <span style={s.badge}>Most Popular</span>}
                <h2 style={s.cardName}>{box.name}</h2>
                <div style={s.priceRow}>
                  <span style={s.price}>{box.price}</span>
                  <span style={s.per}>/week</span>
                </div>
                <p style={s.ideal}>{box.ideal}</p>
                <p style={s.items}>{box.items}</p>
                <Link href="/contact" style={box.popular ? s.btnOrange : s.btnGreen}>Subscribe Now</Link>
              </div>
            ))}
          </div>
          <p style={s.note}>All subscriptions are flexible — skip, pause, or cancel anytime with no fees.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
