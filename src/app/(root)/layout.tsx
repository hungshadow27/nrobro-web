import Footer from "@/components/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-[900px] mx-auto">
      {children}
      <Footer />
    </main>
  );
}
