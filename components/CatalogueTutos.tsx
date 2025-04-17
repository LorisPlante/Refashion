"use client";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import ArrowRight from "@/components/icons/ArrowRight";
import Image from "next/image";

type Tuto = {
  id: number;
  titre: string;
  description: string;
  image: string;
  categorie: string;
  itemType: string;
  difficulty: string;
  toolsNeeded: string[];
};
type SearchFilters = {
  titre: string;
  categorie: string;
  difficulty: string;
  itemType: string;
  toolsNeeded: string[];
};

export default function CatalogueTutos({ tutos }: { tutos: Tuto[] }) {
  const [filtered, setFiltered] = useState<Tuto[]>(tutos);

  const handleFilter = (filters: SearchFilters) => {
    const search = filters.titre.toLowerCase();
    const result = tutos.filter(
      (tuto) =>
        (tuto.titre.toLowerCase().includes(search) || tuto.description.toLowerCase().includes(search)) &&
        (filters.categorie ? tuto.categorie === filters.categorie : true) &&
        (filters.difficulty ? tuto.difficulty === filters.difficulty : true) &&
        (filters.itemType ? tuto.itemType === filters.itemType : true) &&
        (filters.toolsNeeded.length === 0 || filters.toolsNeeded.every((tool) => tuto.toolsNeeded.includes(tool)))
    );
    setFiltered(result);
  };

  return (
    <div className="px-4 py-8">
      <SearchBar onFilter={handleFilter} />

      <div className="flex flex-wrap gap-4 justify-center">
        {filtered.map((tuto) => (
          <div
            key={tuto.id}
            className="w-[332px] h-[496px]  rounded-4xl shadow-md hover:scale-[101%] transition-all duration-200 overflow-hidden cursor-pointer flex flex-col justify-between group">
            <Image width={332} height={432} src={tuto.image} alt={tuto.titre} className="block w-full h-full object-cover bg-bleu" />
            {/* <h3 className="text-sm font-semibold">{tuto.titre}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">{tuto.description}</p> */}
            <div className="bg-orange h-16 flex justify-between items-center">
              <div className="flex justify-between items-center">
                <div className="pl-6">Apprendre la couture</div>
              </div>
              <div className="w-16 h-16 relative bg-orange group-hover:bg-black flex justify-center items-center">
                <ArrowRight fill_bg="fill-none" fill_text="fill-black group-hover:fill-orange"></ArrowRight>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
