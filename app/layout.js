export const metadata = {
  title: 'WIN99',
  description: 'WIN99 Gaming Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#120303' }}>
        {children}
      </body>
    </html>
  )
}
