import { useState } from 'react';

export default function Deposit() {
  const [method, setMethod] = useState('bkash');
  const [amount, setAmount] = useState('');
  const [trxId, setTrxId] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();
    alert(`ডিপোজিট রিকুয়েস্ট পাঠানো হয়েছে!\nমেথড: ${method}\nপরিমাণ: ৳${amount}\nTrxID: ${trxId}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>WIN99 - ডিপোজিট</h2>
      
      <div style={styles.card}>
        <p style={styles.infoText}>আমাদের বিকাশ/নগদ নম্বর: <strong style={{color: '#ffd700'}}>01700000000</strong></p>
        
        <form onSubmit={handleDeposit} style={styles.form}>
          <label style={styles.label}>মেথড সিলেক্ট করুন:</label>
          <select style={styles.select} value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="bkash">bKash (বিকাশ)</option>
            <option value="nagad">Nagad (নগদ)</option>
            <option value="rocket">Rocket (রকেট)</option>
          </select>

          <label style={styles.label}>পরিমাণ (টাকা):</label>
          <input 
            type="number" 
            placeholder="সর্বনিম্ন ২০০ টাকা" 
            required 
            style={styles.input}
            onChange={(e) => setAmount(e.target.value)}
          />

          <label style={styles.label}>ট্রানজেকশন আইডি (TrxID):</label>
          <input 
            type="text" 
            placeholder="যেমন: 8N7A6D5C" 
            required 
            style={styles.input}
            onChange={(e) => setTrxId(e.target.value)}
          />

          <button type="submit" style={styles.button}>ডিপোজিট জমা দিন</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: { background: '#120303', minHeight: '100vh', padding: '20px', color: '#fff', textAlign: 'center' },
  title: { color: '#ffd700', marginBottom: '15px' },
  card: { background: '#220808', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255, 215, 0, 0.2)', maxWidth: '380px', margin: '0 auto' },
  infoText: { fontSize: '14px', marginBottom: '15px', color: '#ddd' },
  form: { display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' },
  label: { fontSize: '13px', color: '#ffd700' },
  input: { padding: '10px', borderRadius: '6px', border: '1px solid #ffd700', background: '#120303', color: '#fff' },
  select: { padding: '10px', borderRadius: '6px', border: '1px solid #ffd700', background: '#120303', color: '#fff' },
  button: { marginTop: '10px', padding: '12px', borderRadius: '8px', background: 'linear-gradient(135deg, #ffd700, #996515)', border: 'none', fontWeight: 'bold', color: '#000', cursor: 'pointer' }
};
  
