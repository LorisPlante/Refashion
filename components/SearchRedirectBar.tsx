"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";
import Filtres from "./icons/Filtres";
import FiltersModal from "./FiltersModal";

export default function SearchRedirectBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const [showModalMobile, setShowModalMobile] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/recherche?search=${encodeURIComponent(query.trim())}`);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-fit flex justify-start items-center px-4 my-8 gap-2 z-[99999999999999999]">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="relative w-full h-fit flex justify-center items-center">
            <input
              type="text"
              placeholder="Rechercher ..."
              className="bg-background w-full flex md:hidden rounded-full justify-between items-center shadow-md p-3 border border-gray-100"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="absolute block right-3 top-3 cursor-pointer">
              <Search></Search>
            </button>
          </div>
        </form>
        <div onClick={() => setShowModalMobile(true)} className="w-fit cursor-pointer">
          <Filtres size={24} fill_text="fill-white" fill_bg="bg-orange"></Filtres>
        </div>
      </div>

      {showModalMobile && <FiltersModal onClose={() => setShowModalMobile(false)} onSearch={() => handleSubmit}></FiltersModal>}
    </>
  );
}
