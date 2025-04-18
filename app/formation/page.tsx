import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import SearchRedirectBar from "@/components/SearchRedirectBar";

export default function TrainingCardMobile() {
  return (
    <>
      <Header></Header>
      <SearchRedirectBar></SearchRedirectBar>
      <main className="min-h-screen sm:pt-16">
        <div className="p-4 space-y-4">
          {/* Placeholder image */}
          <div className="w-full aspect-[4/3] rounded-xl bg-gray-300 flex items-center justify-center text-white text-lg font-semibold">Image</div>

          {/* Titre + lieu */}
          <div>
            <h2 className="text-xl font-bold">
              École Digital<span className="font-normal">, Centre de formation</span>
            </h2>
            <p className="text-gray-500 text-sm">Paris, 11e</p>
          </div>

          {/* Caractéristiques */}
          <div>
            <h3 className="font-semibold text-sm mb-1">Caractéristiques</h3>
            <p className="text-sm text-black/80">
              Apprendre à créer, réparer, transformer.
              <br />
              Nichée au coeur de la ville, l’école de couture L’Atelier des Mains forme chaque année de jeunes passionnés aux savoir-faire textiles, de la coupe à la création, en
              passant par la réparation et l’upcycling
            </p>
          </div>

          <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-4 py-2 rounded-md">En savoir plus</button>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
