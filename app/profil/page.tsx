import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProfilInactif from "@/components/ProfilInactif";
import { Calendar, Hand, Mail, Pencil, Smartphone } from "lucide-react";

export default function ProfilPage() {
  const user = null; // Simule absence de session

  return (
    <>
      <Header></Header>
      <main className="min-h-screen sm:pt-16 px-4 py-8">
        {!user && <ProfilInactif></ProfilInactif>}
        <h1 className="text-2xl font-semibold mb-6">Mon profil</h1>

        <div className="flex items-center gap-4 mb-4">
          <div className="bg-orange size-20 rounded-2xl flex items-center justify-center">
            <span className="text-white text-3xl">👤</span>
          </div>
          <div>
            <h2 className="text-xl font-bold">Jean Bonolt</h2>
            <p className="text-base text-zinc-700">Débutant</p>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <button className="bg-zinc-500 text-white font-semibold px-4 py-3 rounded-xl flex-1">Mes Re_fresh</button>
          <button className="bg-zinc-800 text-white font-semibold px-4 py-3 rounded-xl flex-1">Paramètres</button>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Hand size={20} />
          <span className="text-lg font-medium">Gaucher</span>
          <Pencil size={16} className="ml-auto" />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Mail size={20} />
          <span className="text-lg font-medium">debbie@example.com</span>
          <Pencil size={16} className="ml-auto" />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Calendar size={20} />
          <span className="text-lg font-medium">10/28/12</span>
          <Pencil size={16} className="ml-auto" />
        </div>

        <div className="flex items-center gap-3">
          <Smartphone size={20} />
          <span className="text-lg font-medium">+33 6 98 98 78 76</span>
          <Pencil size={16} className="ml-auto" />
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
