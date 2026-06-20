import './globals.css'  // ← ЭТА СТРОКА ДОЛЖНА БЫТЬ!

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}