import Navbar from "./components/Navbar";
import "./globals.css";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="h-screen bg-[#0A0A0B] flex flex-col mx-auto  px-6 py-8">
        <Navbar />
        {children}
        </body>
    </html>
  );
}
