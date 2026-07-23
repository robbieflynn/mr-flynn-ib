import './globals.css'

export const metadata = {
  title: 'Mr Flynn IB - The Home of IB Mathematics',
  description: 'Master IB Mathematics with examiner insight. Complete courses for AA HL, AA SL, AI HL, AI SL.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-paper text-slate font-sans">
        {children}
      </body>
    </html>
  )
}
