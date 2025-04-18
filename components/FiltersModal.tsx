"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Cta from "./Cta";

type Filters = {
  difficulty: string;
  handedness: string;
  fabrics: string[];
  materials: string[];
  clothingTypes: string[];
};

const difficulties = ["Facile", "Moyen", "Avancé", "Professionnel"];
const handednessOptions = ["Gaucher", "Droitier"];
const fabrics = [
  { name: "Jeans", img: "/images/fabrics/jeans.jpg" },
  { name: "Laine", img: "/images/fabrics/laine.jpg" },
  { name: "Dentelle", img: "/images/fabrics/dentelle.jpg" },
  { name: "Lin", img: "/images/fabrics/lin.jpg" },
  { name: "Jersey", img: "/images/fabrics/jersey.jpg" },
  { name: "Cuir", img: "/images/fabrics/cuir.jpg" },
  { name: "Coton", img: "/images/fabrics/coton.jpg" },
];
const materials = ["Machine à coudre", "Aiguilles et fils", "Patch"];
const clothingTypes = ["Manteau", "Robe", "Vêtement de sport", "Maillot de bain", "T-Shirt", "Pantalon", "Veste", "Chemise", "Sous-vêtements", "Chaussures", "Autres"];

export default function FiltersModal({ onClose, onSearch }: { onClose: () => void; onSearch: (filters: Filters) => void }) {
  const [difficulty, setDifficulty] = useState("");
  const [handedness, setHandedness] = useState("");
  const [fabricsSelected, setFabrics] = useState<string[]>([]);
  const [materialsSelected, setMaterials] = useState<string[]>([]);
  const [clothingSelected, setClothing] = useState<string[]>([]);

  const toggle = (value: string, setter: (s: string[]) => void, current: string[]) => {
    setter(current.includes(value) ? current.filter((v) => v !== value) : [...current, value]);
  };

  const handleSubmit = () => {
    onSearch({
      difficulty,
      handedness,
      fabrics: fabricsSelected,
      materials: materialsSelected,
      clothingTypes: clothingSelected,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
      <div className="w-full max-w-[420px] h-full bg-[#fcf7f4] p-6 overflow-y-auto relative">
        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 flex justify-center items-center size-11 bg-black rounded-full">
          <X size={28} stroke="white" />
        </button>

        <h2 className="text-2xl font-bold mb-4">Filtres</h2>

        {/* Difficulty */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Trier par</p>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((d) => (
              <button key={d} onClick={() => setDifficulty(d)} className={`px-4 py-2 rounded-full border text-sm ${difficulty === d ? "bg-black text-white" : "border-black"}`}>
                {d}
              </button>
            ))}
          </div>
        </div>

        <hr className="my-4" />

        {/* Gaucher / Droitier */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Tu es</p>
          <div className="flex gap-2">
            {handednessOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setHandedness(opt)}
                className={`px-4 py-2 rounded-full border text-sm ${handedness === opt ? "bg-black text-white" : "border-black"}`}>
                {opt}
              </button>
            ))}
          </div>
        </div>

        <hr className="my-4" />

        {/* Fabrics */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Tissus</p>
          <div className="flex flex-wrap gap-3">
            {fabrics.map((f) => (
              <button
                key={f.name}
                onClick={() => toggle(f.name, setFabrics, fabricsSelected)}
                className={`rounded-full w-[60px] h-[60px] bg-bleu overflow-hidden border-2 ${fabricsSelected.includes(f.name) ? "border-orange-500" : "border-transparent"}`}>
                <Image src={f.img} alt={f.name} width={60} height={60} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <hr className="my-4" />

        {/* Materials */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Matériel à disposition</p>
          <div className="flex flex-wrap gap-2">
            {materials.map((m) => (
              <button
                key={m}
                onClick={() => toggle(m, setMaterials, materialsSelected)}
                className={`px-4 py-2 rounded-full border text-sm ${materialsSelected.includes(m) ? "bg-black text-white" : "border-black"}`}>
                {m}
              </button>
            ))}
          </div>
        </div>

        <hr className="my-4" />

        {/* Clothing types */}
        <div className="mb-6">
          <p className="font-semibold mb-2">Type de vêtements</p>
          <div className="flex flex-wrap gap-2">
            {clothingTypes.map((type) => (
              <button
                key={type}
                onClick={() => toggle(type, setClothing, clothingSelected)}
                className={`px-4 py-2 rounded-full border text-sm ${clothingSelected.includes(type) ? "bg-black text-white" : "border-black"}`}>
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <div onClick={handleSubmit} className="w-fit">
            <Cta link="/recherche" bg="bg-orange" text="text-white" fill_bg_icon="fill-orange" fill_text_icon="fill-white" size_icon={28} displayIcon={true}>
              Rechercher
            </Cta>
          </div>
        </div>
      </div>
    </div>
  );
}
