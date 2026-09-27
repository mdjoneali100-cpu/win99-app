import { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({ phone: '', password: '', referCode: '' });

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Account created for ${formData.phone}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>WIN99 - সাইনআপ</h2>
      <form onSubmit={handleSignup} style={styles.form}>
        <input 
          type="tel" 
          placeholder="ফোন নম্বর (017...)" 
          required 
          style={styles.input}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
        <input 
          type="password" 
          placeholder="পাসওয়ার্ড" 
          required 
          style={styles.input}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <input 
          type="text" 
          placeholder="রেফারেল কোড (ঐচ্ছিক)" 
          style={styles.input}
          onChange={(e) => setFormData({...formData, referCode: e.target.value})}
        />
        <button type="submit" style={styles.button}>রেজিস্টার করুন</button>
      </form>
    </div>
  );
}

const styles = {
  container: { background: '#120303', minHeight: '100vh', padding: '20px', color: '#fff', textAlign: 'center' },
  title: { color: '#ffd700', marginBottom: '20px' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '350px', margin: '0 auto' },
  input: { padding: '12px', borderRadius: '8px', border: '1px solid #ffd700', background: '#220808', color: '#fff' },
  button: { padding: '12px', borderRadius: '8px', background: 'linear-gradient(135deg, #ffd700, #996515)', border: 'none', fontWeight: 'bold', cursor: 'pointer' }
};
            
