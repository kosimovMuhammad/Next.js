import Link from 'next/link';

export default function DashboardLayout({ children, profile, analytics }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Панели Dashboard</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link href="/dashboard" style={{ marginRight: '10px' }}>Асосӣ</Link>
        <Link href="/dashboard/settings">Танзимот (Settings)</Link>
      </nav>
      
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', flex: 1 }}>
          <h3>Қисмати @profile</h3>
          {profile}
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', flex: 1 }}>
          <h3>Қисмати @analytics</h3>
          {analytics}
        </div>
      </div>
      <div style={{ border: '1px dashed #aaa', padding: '20px' }}>
        <h3>Қисмати асосӣ (children)</h3>
        {children}
      </div>
    </div>
  );
}
