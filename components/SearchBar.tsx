"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

type SearchFilters = {
  titre: string;
  categorie: string;
  difficulty: string;
  itemType: string;
  toolsNeeded: string[];
};

const itemTypes = ["teeshirt", "pantalon", "chaussette", "chaussure", "hoodie", "veste"];
const outils = [
  "fil",
  "aiguille",
  "ciseaux",
  "fer à repasser",
  "bouton",
  "peinture textile",
  "pinceaux",
  "patchs",
  "patch thermocollant",
  "nouveaux lacets",
  "brosse",
  "bicarbonate",
  "eau",
  "vinaigre",
  "nouvelle fermeture",
  "patch déco",
  "colle spéciale chaussures",
  "chiffon",
  "pince",
];

export default function SearchBar({ onFilter }: { onFilter: (filters: SearchFilters) => void }) {
  const [titre, setTitre] = useState("");
  const [categorie, setCategorie] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [itemType, setItemType] = useState("");
  const [toolsNeeded, setToolsNeeded] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  const toggleTool = (tool: string) => {
    setToolsNeeded((prev) => (prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]));
  };

  const handleSearch = () => {
    onFilter({ titre, categorie, difficulty, itemType, toolsNeeded });
  };

  return (
    <>
      <div className="hidden md:flex flex-wrap gap-6 items-end bg-white dark:bg-zinc-900 rounded-full shadow-md border border-gray-200 px-6 py-4 w-fit mx-auto mb-6">
        <div className="flex flex-col">
          <span className="text-xs font-semibold">Titre</span>
          <input type="text" placeholder="Ex: jean, lacet..." value={titre} onChange={(e) => setTitre(e.target.value)} className="text-sm bg-transparent outline-none" />
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-semibold">Catégorie</span>
          <select value={categorie} onChange={(e) => setCategorie(e.target.value)} className="text-sm bg-transparent outline-none">
            <option value="">Toutes</option>
            <option value="Vêtements">Vêtements</option>
            <option value="Chaussures">Chaussures</option>
          </select>
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-semibold">Difficulté</span>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="text-sm bg-transparent outline-none">
            <option value="">Toutes</option>
            <option value="facile">Facile</option>
            <option value="moyen">Moyen</option>
            <option value="difficile">Difficile</option>
          </select>
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-semibold">Type d’article</span>
          <select value={itemType} onChange={(e) => setItemType(e.target.value)} className="text-sm bg-transparent outline-none">
            <option value="">Tous</option>
            {itemTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <SlidersHorizontal size={16} />
          Outils nécessaires {toolsNeeded.length > 0 && `(${toolsNeeded.length})`}
        </button>

        <div className="ml-auto">
          <button onClick={handleSearch} className="bg-orange hover:opacity-90 text-foreground p-3 rounded-full cursor-pointer">
            <Search size={20} />
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg max-w-lg w-full shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Filtres par outils</h3>
              <button onClick={() => setShowModal(false)}>
                <X size={20} className="text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-scroll border-gray-200 border p-4 rounded-lg">
              {outils.map((tool) => (
                <label key={tool} className="flex items-center gap-2 text-sm hover:bg-gray-200 cursor-pointer px-2 py-1 rounded">
                  <input type="checkbox" checked={toolsNeeded.includes(tool)} onChange={() => toggleTool(tool)} />
                  {tool}
                </label>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <button onClick={() => setToolsNeeded([])} className="text-sm text-gray-600 hover:underline dark:text-gray-300 cursor-pointer">
                Réinitialiser
              </button>

              <button onClick={() => setShowModal(false)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer">
                Appliquer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
