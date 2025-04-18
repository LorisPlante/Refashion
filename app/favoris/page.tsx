"use client";
import SearchBar from "@/components/SearchBar";
import { useMemo, useState } from "react";
import ArrowRight from "@/components/icons/ArrowRight";
import Image from "next/image";
import { Heart, MoreHorizontal } from "lucide-react";
import tutos from "@/data/tutos.json";
import SearchRedirectBar from "@/components/SearchRedirectBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export default function CatalogueTutos() {
  const [filtered, setFiltered] = useState<Tuto[]>(tutos);
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());

  const heights = [110, 130, 150, 170, 190, 210];

  // 👇 Une seule fois au montage
  const cardHeights = useMemo(() => {
    const map = new Map<number, number>();
    tutos.forEach((tuto) => {
      map.set(tuto.id, heights[Math.floor(Math.random() * heights.length)]);
    });
    return map;
  }, [tutos]);

  const toggleLike = (id: number) => {
    setLikedIds((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  return (
    <>
      <Header></Header>
      <main className="min-h-screen pt-16">
        <div className="px-4 py-8">
          <SearchRedirectBar></SearchRedirectBar>

          <div className="columns-2 space-y-4 px-2">
            {tutos.slice(0, 5).map((tuto) => {
              const height = cardHeights.get(tuto.id) ?? 150;
              const isLiked = likedIds.has(tuto.id);

              return (
                <div key={tuto.id} style={{ height: `${height}px` }} className="break-inside-avoid rounded-xl shadow-md overflow-hidden cursor-pointer group bg-white mb-4">
                  <div className="relative h-full w-full bg-bleu">
                    <div
                      className="absolute top-2 right-2 size-10 flex justify-center items-center rounded-full bg-white z-10"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(tuto.id);
                      }}>
                      <Heart size={24} fill={isLiked ? "none" : "black"} stroke="black" />
                    </div>

                    <div className="absolute bottom-2 right-2 z-10">
                      <MoreHorizontal size={32} fill="white" stroke="white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
