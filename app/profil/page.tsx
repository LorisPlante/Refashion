import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProfilInactif from "@/components/ProfilInactif";

export default function ProfilPage() {
  const user = null; // Simule absence de session

  return (
    <>
      <Header></Header>
      <main className="min-h-screen sm:pt-16">{!user && <ProfilInactif></ProfilInactif>}</main>
      <Footer></Footer>
    </>
  );
}
