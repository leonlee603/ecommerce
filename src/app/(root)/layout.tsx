// Layout for Header and Footer
import Header from "@/components/shared/header";
import Footer from "@/components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="wrapper flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
