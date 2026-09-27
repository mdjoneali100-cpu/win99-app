import { useState } from 'react';

export default function Referral() {
  const [copied, setCopied] = useState(false);
  const referralCode = "WIN99USER123";
  const referralLink = `https://win99.vercel.app/signup?ref=${referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>WIN99 - রেফার এবং আয় করুন</h2>
      
      <div style={styles.card}>
        <p style={styles.desc}>আপনার রেফারেল লিংক শেয়ার করুন এবং বন্ধুদের রেজিস্ট্রেশনে পান আকর্ষণীয় বোনাস!</p>
        
        <div style={styles.box}>
          <label style={styles.label}>আপনার রেফারেল কোড:</label>
          <div style={styles.codeBadge}>{referralCode}</div>
        </div>

        <div style={styles.box}>
          <label style={styles.label}>আপনার রেফারেল লিংক:</label>
          <input 
            type="text" 
            readOnly 
            value={referralLink} 
            style={styles.input}
          />
          <button onClick={copyToClipboard} style={styles.button}>
            {copied ? 'কপি হয়েছে! ✓' : 'লিংক কপি করুন'}
          </button>
        </div>

        <div style={styles.stats}>
          <div>
            <span style={styles.statNum}>0</span>
            <p style={styles.statText}>মোট রেফারেল</p>
          </div>
          <div>
            <span style={styles.statNum}>৳ 0.00</span>
            <p style={styles.statText}>মোট ইনকাম</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { background: '#120303', minHeight: '100vh', padding: '20px', color: '#fff', textAlign: 'center' },
  title: { color: '#ffd700', marginBottom: '15px' },
  card: { background: '#220808', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255, 215, 0, 0.2)', maxWidth: '380px', margin: '0 auto' },
  desc: { fontSize: '13px', color: '#ccc', marginBottom: '20px', lineHeight: '1.4' },
  box: { marginBottom: '15px', textAlign: 'left' },
  label: { fontSize: '12px', color: '#ffd700', display: 'block', marginBottom: '5px' },
  codeBadge: { background: '#120303', padding: '10px', borderRadius: '6px', color: '#ffd700', fontWeight: 'bold', fontSize: '18px', textAlign: 'center', border: '1px dashed #ffd700' },
  input: { width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ffd700', background: '#120303', color: '#fff', fontSize: '12px', marginBottom: '8px' },
  button: { width: '100%', padding: '10px', borderRadius: '6px', background: 'linear-gradient(135deg, #ffd700, #996515)', border: 'none', fontWeight: 'bold', color: '#000', cursor: 'pointer' },
  stats: { display: 'flex', justifyContent: 'space-around', marginTop: '20px', paddingTop: '15px', borderTop: '1px solid rgba(255,215,0,0.1)' },
  statNum: { fontSize: '18px', fontWeight: 'bold', color: '#ffd700' },
  statText: { fontSize: '11px', color: '#aaa', marginTop: '3px' }
};
