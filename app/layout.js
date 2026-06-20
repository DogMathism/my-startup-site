import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>Название стартапа — Инновации в разработке</title>
        <meta name="description" content="Продукт, который меняет правила игры" />
      </head>
      <body className="bg-white text-[#1D1D1F] antialiased">
        {children}
      </body>
    </html>
  )
}