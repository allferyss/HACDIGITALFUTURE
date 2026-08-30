import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsappFloat } from "@/components/widgets/whatsapp-float";
import { Loader } from "@/components/widgets/loader";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="relative overflow-hidden">{children}</main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
