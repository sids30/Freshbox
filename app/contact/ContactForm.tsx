'use client';

import { useState } from 'react';
import Link from 'next/link';

const s: Record<string, React.CSSProperties> = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: '40px 44px',
    boxShadow: '0 2px 16px rgba(45,106,79,0.08)',
    border: '1px solid #e6f4ec',
  },
  field: { marginBottom: 24 },
  label: { display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 },
  input: {
    width: '100%',
    border: '1.5px solid #e5e7eb',
    borderRadius: 12,
    padding: '12px 16px',
    fontSize: 15,
    color: '#111827',
    outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.2s',
    backgroundColor: '#fafafa',
  },
  textarea: {
    width: '100%',
    border: '1.5px solid #e5e7eb',
    borderRadius: 12,
    padding: '12px 16px',
    fontSize: 15,
    color: '#111827',
    outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: 'Inter, sans-serif',
    resize: 'vertical' as const,
    minHeight: 140,
    backgroundColor: '#fafafa',
  },
  select: {
    width: '100%',
    border: '1.5px solid #e5e7eb',
    borderRadius: 12,
    padding: '12px 16px',
    fontSize: 15,
    color: '#111827',
    outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: 'Inter, sans-serif',
    backgroundColor: '#fafafa',
    appearance: 'auto' as const,
  },
  btn: {
    width: '100%',
    backgroundColor: '#E76F51',
    color: '#fff',
    border: 'none',
    padding: '16px 0',
    borderRadius: 50,
    fontSize: 17,
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0 4px 16px rgba(231,111,81,0.3)',
    fontFamily: 'Inter, sans-serif',
  },

  // success state
  success: { textAlign: 'center' as const, padding: '48px 0' },
  successEmoji: { fontSize: 56, display: 'block', marginBottom: 16 },
  successH2: { fontSize: 24, fontWeight: 800, color: '#2D6A4F', marginBottom: 8 },
  successP: { fontSize: 16, color: '#6b7280' },
  repeatBtn: { fontSize: 14, color: '#9ca3af', textDecoration: 'underline', cursor: 'pointer', marginTop: 20, display: 'block', background: 'none', border: 'none', fontFamily: 'Inter, sans-serif' },
};

export default function ContactForm() {
  const [form, setForm] = useState({ fullName: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ fullName: '', email: '', subject: '', message: '' });
  };

  if (submitted) {
    return (
      <div style={s.card}>
        <div style={s.success}>
          <span style={s.successEmoji}>✅</span>
          <h2 style={s.successH2}>Message Sent!</h2>
          <p style={s.successP}>Thank you for reaching out. We&apos;ll be in touch soon.</p>
          <button style={s.repeatBtn} onClick={() => setSubmitted(false)}>Send another message</button>
        </div>
      </div>
    );
  }

  return (
    <div style={s.card}>
      <form onSubmit={handleSubmit}>
        <div style={s.field}>
          <label style={s.label} htmlFor="fullName">Full Name</label>
          <input id="fullName" type="text" required style={s.input} placeholder="Jane Smith"
            value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} />
        </div>
        <div style={s.field}>
          <label style={s.label} htmlFor="email">Email Address</label>
          <input id="email" type="email" required style={s.input} placeholder="jane@example.com"
            value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
        <div style={s.field}>
          <label style={s.label} htmlFor="subject">Subject</label>
          <select id="subject" required style={s.select}
            value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
            <option value="">Select a subject…</option>
            <option value="general">General Inquiry</option>
            <option value="subscription">Subscription Help</option>
            <option value="farm">Farm Partnership</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>
        <div style={s.field}>
          <label style={s.label} htmlFor="message">Message</label>
          <textarea id="message" required style={s.textarea} placeholder="How can we help?"
            value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
        </div>
        <button type="submit" style={s.btn}>Send Message</button>
      </form>
    </div>
  );
}
