"use client";
import Image from "next/image";
import ArrowRight from "@/components/icons/ArrowRight";
import Header from "@/components/Header";
import SearchRedirectBar from "@/components/SearchRedirectBar";
import Footer from "@/components/Footer";

const formations = [
  {
    title: "Réparer le cuir",
    image: "/images/formations/cuir.jpg",
  },
  {
    title: "Couture simple",
    image: "/images/formations/couture.jpg",
  },
  {
    title: "Entretenir",
    image: "/images/formations/entretenir.jpg",
  },
  {
    title: "Customiser",
    image: "/images/formations/customiser.jpg",
  },
  {
    title: "Finitions",
    image: "/images/formations/finitions.jpg",
  },
  {
    title: "Assembler",
    image: "/images/formations/assembler.jpg",
  },
];

export default function FormationsPage() {
  return (
    <>
      <Header></Header>
      <SearchRedirectBar></SearchRedirectBar>
      <main className="min-h-screen sm:pt-16">
        <div className="px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Découvrez les formations</h1>

          <div className="grid grid-cols-2 gap-4">
            {formations.map((formation) => (
              <div key={formation.title} className="rounded-2xl overflow-hidden shadow-sm bg-white">
                <div className="relative w-full h-40">
                  <Image src={formation.image} alt={formation.title} fill className="object-cover" />
                </div>
                <div className="bg-orange text-black px-4 py-3 flex justify-between items-center">
                  <span className="font-medium">{formation.title}</span>
                  <ArrowRight fill_bg="fill-none" fill_text="fill-black" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
