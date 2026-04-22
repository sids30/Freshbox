import Link from 'next/link';

const styles: Record<string, React.CSSProperties> = {
  footer: {
    backgroundColor: '#1B4332',
    padding: '48px 24px',
    marginTop: 'auto',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    textAlign: 'center',
  },
  tagline: {
    color: '#d1fae5',
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 8,
  },
  copyright: {
    color: '#86efac',
    fontSize: 14,
    marginBottom: 24,
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: 32,
    flexWrap: 'wrap' as const,
  },
  link: {
    color: '#86efac',
    textDecoration: 'none',
    fontSize: 14,
    transition: 'color 0.2s',
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <p style={styles.tagline}>Supporting local farmers. Delivering freshness to your door.</p>
        <p style={styles.copyright}>© 2026 FreshBox. All rights reserved.</p>
        <div style={styles.links}>
          <Link href="/privacy" style={styles.link}>Privacy Policy</Link>
          <Link href="/terms" style={styles.link}>Terms of Service</Link>
          <Link href="/contact" style={styles.link}>Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
