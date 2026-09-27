import { useState } from 'react';

export default function Home() {
  const [balance, setBalance] = useState(0.00);

  return (
    <div style={styles.container}>
      {/* Header Bar */}
      <div style={styles.header}>
        <div style={styles.logoBox}>
          <h2 style={styles.logo}>WIN99</h2>
        </div>
        <div style={styles.authButtons}>
          <a href="/login" style={styles.loginBtn}>লগইন</a>
          <a href="/signup" style={styles.signupBtn}>সাইনআপ</a>
        </div>
      </div>

      {/* Main Notice Banner */}
      <div style={styles.noticeBar}>
        📢 WIN99-এ আপনাকে স্বাগতম! বিকাশ, নগদ ও রকেটে দ্রুত ডিপোজিট এবং উইথড্র সুবিধা।
      </div>

      {/* Wallet / Balance Section */}
      <div style={styles.balanceCard}>
        <div style={styles.balanceInfo}>
          <span style={styles.balanceLabel}>Main Balance</span>
          <h1 style={styles.balanceAmount}>৳ {balance.toFixed(2)}</h1>
        </div>
        <div style={styles.btnRow}>
          <a href="/deposit" style={styles.depositBtn}>+ ডিপোজিট</a>
          <a href="/withdraw" style={styles.withdrawBtn}>- উইথড্র</a>
        </div>
      </div>

      {/* Navigation Quick Menu */}
      <div style={styles.menuGrid}>
        <a href="/referral" style={styles.menuCard}>
          <span style={styles.icon}>🎁</span>
          <span style={styles.menuText}>রেফারেল</span>
        </a>
        <a href="/deposit" style={styles.menuCard}>
          <span style={styles.icon}>💳</span>
          <span style={styles.menuText}>ডিপোজিট</span>
        </a>
        <a href="/withdraw" style={styles.menuCard}>
          <span style={styles.icon}>🏧</span>
          <span style={styles.menuText}>উইথড্র</span>
        </a>
        <a href="/admin" style={styles.menuCard}>
          <span style={styles.icon}>⚙️</span>
          <span style={styles.menuText}>অ্যাডমিন</span>
        </a>
      </div>

      {/* Games Area */}
      <div style={styles.gameContainer}>
        <h3 style={styles.sectionTitle}>গেম ক্যাটাগরি</h3>
        <div style={styles.gameGrid}>
          <div style={styles.gameBox}>🎰 স্লট গেম</div>
          <div style={styles.gameBox}>🎲 লাইভ ক্যাসিনো</div>
          <div style={styles.gameBox}>🏏 স্পোর্টস বেটিং</div>
          <div style={styles.gameBox}>🃏 কার্ড গেম</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { background: '#120303', minHeight: '100vh', padding: '15px', color: '#fff', fontFamily: 'Arial, sans-serif' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', paddingBottom: '10px', borderBottom: '1px solid #ffd700' },
  logo: { color: '#ffd700', margin: 0, fontSize: '26px', fontWeight: 'bold', letterSpacing: '1px' },
  authButtons: { display: 'flex', gap: '8px' },
  loginBtn: { textDecoration: 'none', background: 'transparent', color: '#ffd700', border: '1px solid #ffd700', padding: '5px 12px', borderRadius: '5px', fontSize: '12px', fontWeight: 'bold' },
  signupBtn: { textDecoration: 'none', background: 'linear-gradient(135deg, #ffd700, #996515)', color: '#000', padding: '5px 12px', borderRadius: '5px', fontSize: '12px', fontWeight: 'bold' },
  noticeBar: { background: '#220808', color: '#fff', padding: '8px 12px', borderRadius: '6px', fontSize: '12px', marginBottom: '15px', borderLeft: '3px solid #ffd700' },
  balanceCard: { background: 'linear-gradient(145deg, #2a0a0a, #150404)', padding: '20px', borderRadius: '12px', border: '1px solid #ffd700', textAlign: 'center', marginBottom: '20px' },
  balanceLabel: { color: '#aaa', fontSize: '12px', textTransform: 'uppercase' },
  balanceAmount: { color: '#ffd700', fontSize: '32px', margin: '8px 0 15px 0' },
  btnRow: { display: 'flex', gap: '10px' },
  depositBtn: { flex: 1, textDecoration: 'none', textAlign: 'center', background: 'linear-gradient(135deg, #ffd700, #996515)', color: '#000', padding: '10px', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px' },
  withdrawBtn: { flex: 1, textDecoration: 'none', textAlign: 'center', background: 'transparent', color: '#ffd700', border: '1px solid #ffd700', padding: '10px', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px' },
  menuGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '20px' },
  menuCard: { textDecoration: 'none', background: '#1c0606', border: '1px solid rgba(255,215,0,0.2)', padding: '12px 5px', borderRadius: '8px', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' },
  icon: { fontSize: '18px' },
  menuText: { fontSize: '11px', color: '#ddd' },
  gameContainer: { background: '#1a0505', padding: '15px', borderRadius: '10px', border: '1px solid rgba(255,215,0,0.1)' },
  sectionTitle: { color: '#ffd700', fontSize: '14px', margin: '0 0 10px 0' },
  gameGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
  gameBox: { background: '#2a0a0a', padding: '18px 10px', borderRadius: '6px', border: '1px solid #331010', textAlign: 'center', fontSize: '12px', fontWeight: 'bold', color: '#ffd700' }
};
        
