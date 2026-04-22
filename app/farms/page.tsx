import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Our Farms — FreshBox',
  description: 'Meet the local farm partners who grow the produce in every FreshBox.',
};

const s: Record<string, React.CSSProperties> = {
  page: { display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8F4E3', fontFamily: 'Inter, sans-serif' },
  section: { padding: '80px 24px', flex: 1 },
  inner: { maxWidth: 1100, margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: 56 },
  h1: { fontSize: 44, fontWeight: 800, color: '#2D6A4F', marginBottom: 14, letterSpacing: '-1px' },
  sub: { fontSize: 18, color: '#6b7280', maxWidth: 620, margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 36,
    boxShadow: '0 2px 16px rgba(45,106,79,0.08)',
    border: '1px solid #e6f4ec',
    transition: 'box-shadow 0.2s',
  },
  emoji: { fontSize: 40, marginBottom: 16, display: 'block' },
  farmName: { fontSize: 20, fontWeight: 800, color: '#2D6A4F', marginBottom: 8 },
  location: { fontSize: 14, fontWeight: 600, color: '#E76F51', marginBottom: 14 },
  desc: { fontSize: 15, color: '#6b7280', lineHeight: 1.65 },
};

const farms = [
  {
    name: 'Sunrise Acres Farm',
    location: '📍 Durham Region, ON',
    description: 'A family-owned operation since 1987, Sunrise Acres specializes in root vegetables and leafy greens. They combine traditional farming wisdom with modern sustainable practices to deliver consistent quality year-round.',
  },
  {
    name: 'Maple Ridge Organic',
    location: '📍 Niagara Peninsula, ON',
    description: 'Certified organic berry and fruit farm dedicated to growing sweet, pesticide-free fruit. Maple Ridge believes that healthy soil grows healthy food — and it shows in every flavourful bite.',
  },
  {
    name: 'Greenfield Family Farm',
    location: '📍 Simcoe County, ON',
    description: 'A multi-generational mixed vegetable farm famous for their heirloom tomatoes and diverse squash varieties. Greenfield is deeply committed to soil health and crop rotation for long-term sustainability.',
  },
];

export default function FarmsPage() {
  return (
    <div style={s.page}>
      <Navbar />
      <section style={s.section}>
        <div style={s.inner}>
          <div style={s.header}>
            <h1 style={s.h1}>Meet Our Local Farm Partners</h1>
            <p style={s.sub}>Every FreshBox is packed with produce grown within 150km of your home, by farmers who care about quality and sustainability.</p>
          </div>
          <div style={s.grid}>
            {farms.map((farm) => (
              <div key={farm.name} style={s.card}>
                <span style={s.emoji}>🌱</span>
                <h2 style={s.farmName}>{farm.name}</h2>
                <p style={s.location}>{farm.location}</p>
                <p style={s.desc}>{farm.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
