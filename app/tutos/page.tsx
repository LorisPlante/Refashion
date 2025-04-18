"use client";

import { useRouter } from "next/navigation";
import { Heart, MoreHorizontal } from "lucide-react";
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
          <MoreHorizontal fill="none" stroke="black"></MoreHorizontal>
        </div>
        <div className="text-sm flex justify-start items-center gap-2 my-4">
          <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="22" height="22" rx="11" fill="#FF6235" />
            <path d="M17.9059 14.2405H13.9554V15.3017H17.9059V14.2405Z" fill="black" />
            <path
              d="M12.5526 11.019C12.3592 10.8485 12.126 10.7631 11.8528 10.7631C11.5796 10.7631 11.3512 10.8485 11.1683 11.019C10.9855 11.1894 10.8755 11.4171 10.8398 11.7012H12.8659C12.8506 11.4171 12.7461 11.1894 12.5526 11.019ZM11.8374 14.2586C11.2135 14.2586 10.7059 14.0557 10.3142 13.6504C9.92254 13.245 9.7265 12.7089 9.7265 12.0421C9.7265 11.3753 9.92385 10.8421 10.318 10.4414C10.7123 10.0412 11.2229 9.84082 11.8494 9.84082C12.4759 9.84082 12.99 10.036 13.3922 10.426C13.7941 10.8165 13.9954 11.3368 13.9954 11.9878C13.9954 12.1378 13.9851 12.277 13.9643 12.4065H10.8401C10.8658 12.6853 10.9689 12.9101 11.1496 13.0805C11.3299 13.2509 11.5595 13.3364 11.8379 13.3364C12.2142 13.3364 12.4926 13.1813 12.6732 12.8712H13.8488C13.7251 13.2796 13.4852 13.6128 13.1297 13.8712C12.7738 14.1296 12.3434 14.2586 11.8383 14.2586"
              fill="black"
            />
            <path
              d="M6.66698 11.3686C6.49053 11.2943 6.32004 11.108 6.42061 10.9115C6.47261 10.8099 6.57151 10.7518 6.66785 10.756H6.66996C7.06248 10.756 7.3178 11.3361 7.3178 11.3361C7.11317 11.4195 6.87664 11.4571 6.66698 11.3691M8.58705 11.6472C8.58705 11.6472 8.69614 11.5694 8.74901 11.5271C9.25106 11.1243 9.51613 10.604 9.51613 10.0222C9.51613 9.39767 9.3273 8.89787 8.95525 8.5369C8.40929 8.00842 7.686 7.99995 7.56329 8.00207H4.15747V14.2042H5.21531V8.98758H7.58412C7.6174 8.98758 8.01764 8.99437 8.27631 9.24985C8.3637 9.33613 8.42888 9.44635 8.47111 9.58088C8.51204 9.70775 8.5325 9.85433 8.5325 10.0218C8.5325 10.0692 8.52864 10.1148 8.52056 10.1584C8.49238 10.3908 8.38329 10.6522 8.07983 10.8761C8.08966 10.8688 7.75249 10.5083 7.71841 10.4762C7.5799 10.3464 7.42777 10.2285 7.25816 10.1422C6.70193 9.859 5.97311 9.96535 5.69689 10.5779C5.52903 10.9509 5.52605 11.3866 5.80817 11.7044C6.15335 12.0927 6.69341 12.1721 7.18526 12.1504C7.23209 12.1482 7.69539 12.0786 7.68433 12.0615L9.04686 14.2132H10.2109L8.58617 11.6467L8.58705 11.6472Z"
              fill="black"
            />
          </svg>
          <span>
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
