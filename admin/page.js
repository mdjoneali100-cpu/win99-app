import { useState } from 'react';

export default function AdminPanel() {
  const [deposits, setDeposits] = useState([
    { id: 1, phone: '01712345678', amount: 500, method: 'Bkash', trxId: '8N7A6D5C', status: 'Pending' },
    { id: 2, phone: '01887654321', amount: 1000, method: 'Nagad', trxId: '9K2M3L4P', status: 'Pending' }
  ]);

  const [withdraws, setWithdraws] = useState([
    { id: 1, phone: '01911223344', amount: 300, method: 'Bkash', status: 'Pending' }
  ]);

  const handleDepositAction = (id, action) => {
    setDeposits(deposits.map(item => item.id === id ? { ...item, status: action } : item));
  };

  const handleWithdrawAction = (id, action) => {
    setWithdraws(withdraws.map(item => item.id === id ? { ...item, status: action } : item));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>WIN99 - অ্যাডমিন কন্ট্রোল প্যানেল</h2>

      {/* Deposit Requests Section */}
      <div style={styles.card}>
        <h3 style={styles.sectionTitle}>ডিপোজিট রিকুয়েস্ট</h3>
        {deposits.map(req => (
          <div key={req.id} style={styles.reqBox}>
            <p style={styles.reqText}>ইউজার: <strong>{req.phone}</strong></p>
            <p style={styles.reqText}>মেথড: {req.method} | পরিমাণ: ৳{req.amount}</p>
            <p style={styles.reqText}>TrxID: <span style={{color: '#ffd700'}}>{req.trxId}</span></p>
            <p style={styles.reqText}>স্ট্যাটাস: <strong>{req.status}</strong></p>
            
            {req.status === 'Pending' && (
              <div style={styles.btnGroup}>
                <button onClick={() => handleDepositAction(req.id, 'Approved')} style={styles.approveBtn}>Approve</button>
                <button onClick={() => handleDepositAction(req.id, 'Rejected')} style={styles.rejectBtn}>Reject</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Withdraw Requests Section */}
      <div style={{ ...styles.card, marginTop: '20px' }}>
        <h3 style={styles.sectionTitle}>উইথড্র রিকুয়েস্ট</h3>
        {withdraws.map(req => (
          <div key={req.id} style={styles.reqBox}>
            <p style={styles.reqText}>ইউজার: <strong>{req.phone}</strong></p>
            <p style={styles.reqText}>মেথড: {req.method} | পরিমাণ: ৳{req.amount}</p>
            <p style={styles.reqText}>স্ট্যাটাস: <strong>{req.status}</strong></p>

            {req.status === 'Pending' && (
              <div style={styles.btnGroup}>
                <button onClick={() => handleWithdrawAction(req.id, 'Approved')} style={styles.approveBtn}>Approve</button>
                <button onClick={() => handleWithdrawAction(req.id, 'Rejected')} style={styles.rejectBtn}>Reject</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { background: '#120303', minHeight: '100vh', padding: '20px', color: '#fff', textAlign: 'center' },
  title: { color: '#ffd700', marginBottom: '20px' },
  card: { background: '#220808', padding: '15px', borderRadius: '12px', border: '1px solid rgba(255, 215, 0, 0.2)', maxWidth: '420px', margin: '0 auto', textAlign: 'left' },
  sectionTitle: { color: '#ffd700', fontSize: '16px', marginBottom: '15px', borderBottom: '1px solid rgba(255,215,0,0.2)', paddingBottom: '5px' },
  reqBox: { background: '#120303', padding: '12px', borderRadius: '8px', marginBottom: '10px', border: '1px solid rgba(255,255,255,0.05)' },
  reqText: { fontSize: '13px', color: '#ddd', marginBottom: '4px' },
  btnGroup: { display: 'flex', gap: '10px', marginTop: '10px' },
  approveBtn: { flex: 1, padding: '8px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' },
  rejectBtn: { flex: 1, padding: '8px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }
};
