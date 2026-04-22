import Link from 'next/link';

const styles: Record<string, React.CSSProperties> = {
  nav: {
    backgroundColor: '#2D6A4F',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 68,
  },
  logo: {
    fontSize: 22,
    fontWeight: 800,
    color: '#ffffff',
    textDecoration: 'none',
    letterSpacing: '-0.5px',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  link: {
    color: '#d1fae5',
    textDecoration: 'none',
    fontSize: 15,
    fontWeight: 500,
    padding: '8px 12px',
    borderRadius: 8,
    transition: 'color 0.2s',
  },
  contactBtn: {
    backgroundColor: '#E76F51',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: 15,
    fontWeight: 600,
    padding: '9px 20px',
    borderRadius: 50,
    transition: 'opacity 0.2s',
    marginLeft: 4,
  },
};

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <Link href="/" style={styles.logo}>FreshBox</Link>
        <div style={styles.links}>
          <Link href="/" style={styles.link}>Home</Link>
          <Link href="/how-it-works" style={styles.link}>How It Works</Link>
          <Link href="/farms" style={styles.link}>Our Farms</Link>
          <Link href="/pricing" style={styles.link}>Pricing</Link>
          <Link href="/contact" style={styles.contactBtn}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
