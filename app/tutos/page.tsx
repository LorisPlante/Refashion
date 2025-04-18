"use client";

import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";
import Cta from "@/components/Cta";
import ArrowLeft from "@/components/icons/ArrowLeft";
import Header from "@/components/Header";

export default function TutoDetailPage() {
  const router = useRouter();

  return (
    <>
      <Header></Header>
      <div className="p-4 pb-32">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => router.back()} className="size-fit cursor-pointer">
            <ArrowLeft fill_bg="fill-orange" fill_text="fill-white"></ArrowLeft>
          </button>
          <h1 className="text-2xl font-bold leading-tight">Répare ton jean avec Natoo !</h1>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-4">
          <div className="w-full h-[428px] bg-bleu"></div>{" "}
          <button className="absolute inset-0 flex justify-center items-center bg-black/40">
            <div className="size-[64px] bg-white rounded-full text-black flex items-center justify-center text-2xl">▶</div>
          </button>
        </div>

        <div className="flex items-center justify-between px-2 mb-6">
          <div className="flex items-center gap-2">
            <Heart size={24} />
            <span>20</span>
          </div>
          <span className="text-sm">
            Postée par <strong>Re_Fresh</strong>
          </span>
        </div>

        <h2 className="text-xl font-bold mb-2">
          Découvre comment <strong>Re_fresh</strong> ton jean déchiré avec seulement 2 outils !
        </h2>

        <div className="space-y-6 mt-6">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="rounded-full bg-black text-white size-6 flex items-center justify-center text-xs">1</span>
              Préparer le jean
            </h3>
            <p className="text-sm text-gray-700 mt-1 ml-8">Retourne le vêtement, nettoie la zone autour de la déchirure et coupe les fils qui dépassent.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="rounded-full bg-black text-white size-6 flex items-center justify-center text-xs">2</span>
              Choisi la méthode
            </h3>
            <p className="text-sm text-gray-700 mt-1 ml-8">Couture visible pour un look stylé ou patch discret à l'intérieur pour une réparation invisible.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="rounded-full bg-black text-white size-6 flex items-center justify-center text-xs">3</span>
              Renforce si besoin
            </h3>
            <p className="text-sm text-gray-700 mt-1 ml-8">Ajoute un morceau de tissu (patch) derrière la déchirure pour plus de solidité.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="rounded-full bg-black text-white size-6 flex items-center justify-center text-xs">4</span>
              Coud à la main
            </h3>
            <p className="text-sm text-gray-700 mt-1 ml-8">Couds la ligne de la déchirure avec un point zigzag ou point droit selon l'effet souhaité.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="rounded-full bg-black text-white size-6 flex items-center justify-center text-xs">5</span>
              Finitions
            </h3>
            <p className="text-sm text-gray-700 mt-1 ml-8">Sécurise les fils, repasse la zone pour aplatir, et c'est prêt !</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button onClick={() => router.push("/recherche")} className="w-fit px-3 py-2 cursor-pointer rounded-full border border-gray-400 text-gray-800">
            Un autre ?
          </button>
          <div className="w-fit">
            <Cta link="/recherche" bg="bg-orange" text="text-white" fill_bg_icon="fill-orange" fill_text_icon="fill-white" size_icon={28} displayIcon={true}>
              Re_fresh
            </Cta>
          </div>
        </div>
      </div>
    </>
  );
}
