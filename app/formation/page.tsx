"use client";
import Image from "next/image";
import ArrowRight from "@/components/icons/ArrowRight";
import { useRouter } from "next/navigation";
import Cta from "@/components/Cta";
import Header from "@/components/Header";
import ArrowLeft from "@/components/icons/ArrowLeft";

export default function FormationDetail() {
  const router = useRouter();

  const school = {
    name: "GRETA CDMA",
    address: "21 rue de Sambre-et-Meuse, 75010 Paris",
    image: "/images/greta.jpg", // image dans /public/images/greta.jpg
    formations: [
      "CAP Métiers de la mode – vêtement flou",
      "CAP Métiers de la mode – tailleur",
      "Bac Pro Métiers de la mode – vêtements",
      "BTS Métiers de la mode – vêtements",
      "CAP Cordonnier bottier (réparation et fabrication de chaussures, entretien cuir)",
    ],
  };

  return (
    <>
      <Header></Header>
      <div className="p-4 pb-32">
        {/* Retour */}
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => router.back()} className="size-fit cursor-pointer">
            <ArrowLeft fill_bg="fill-orange" fill_text="fill-white"></ArrowLeft>
          </button>
          <div>
            <h1 className="text-xl font-bold">{school.name}</h1>
            <p className="text-gray-500 text-sm">{school.address}</p>
          </div>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden w-full h-48 mb-6 relative">
          <Image src={school.image} alt={school.name} fill className="object-cover bg-bleu aspect-video" />
        </div>

        {/* Liste formations */}
        <h2 className="font-semibold text-lg mb-2">Formations proposées</h2>
        <ul className="list-disc list-inside text-sm space-y-1 mb-6">
          {school.formations.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button className="w-fit px-3 py-2 cursor-pointer rounded-full border border-gray-400 text-gray-800">Contacte les</button>
          <div className="w-fit">
            <Cta link="" bg="bg-orange" text="text-white" fill_bg_icon="fill-orange" fill_text_icon="fill-white" size_icon={28} displayIcon={true}>
              En savoir +
            </Cta>
          </div>
        </div>
      </div>
    </>
  );
}
