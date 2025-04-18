import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen pb-24 px-4">
      {/* Barre de recherche + menu */}
      <div className="flex items-center justify-between mt-6 mb-4">
        <div className="flex-1">
          <input placeholder="Rechercher" className="w-full rounded-full px-4 py-2 shadow-md text-sm" />
        </div>
        <div className="ml-4 w-10 h-10 rounded-full bg-black flex items-center justify-center">
          <div className="w-5 h-[2px] bg-white" />
        </div>
      </div>

      {/* Vidéo placeholder */}
      <div className="w-full aspect-square bg-gray-300 rounded-xl flex items-center justify-center text-white text-lg font-semibold">Vidéo</div>

      {/* Infos */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            <Heart className="w-5 h-5" /> 20
          </div>
          <div className="flex items-center gap-1 text-sm">
            <MessageCircle className="w-5 h-5" /> 2
          </div>
          <MoreHorizontal className="w-5 h-5" />
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-md">Mettre en favoris</button>
      </div>

      {/* Auteur */}
      <div className="flex items-center gap-2 mt-4">
        <div className="w-4 h-4 rounded-full bg-gray-300" />
        <p className="text-sm">
          Posté(e) par <strong>Re_Fresh</strong>
        </p>
      </div>

      <p className="text-sm mt-2 text-black/80">Découvrez comment réparer votre jean déchiré avec seulement 2 outils !</p>
    </div>
  );
}
