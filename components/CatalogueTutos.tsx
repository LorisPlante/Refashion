"use client";
import { useMemo, useState } from "react";
import { Heart, MoreHorizontal } from "lucide-react";
import SearchRedirectBar from "./SearchRedirectBar";

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

export default function CatalogueTutos({ tutos }: { tutos: Tuto[] }) {
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
    <div className="px-4 py-8 h-full">
      <SearchRedirectBar></SearchRedirectBar>

      <div className="columns-2 space-y-4 px-2 h-full">
        {filtered.map((tuto) => {
          const height = cardHeights.get(tuto.id) ?? 150;
          const isLiked = likedIds.has(tuto.id);

          return (
            <a
              href="/tutos"
              key={tuto.id}
              style={{ height: `${height}px` }}
              className="block break-inside-avoid rounded-xl shadow-md overflow-hidden cursor-pointer group bg-white mb-4">
              <div className="relative h-full w-full bg-bleu">
                <div
                  className="absolute top-2 right-2 size-10 flex justify-center items-center rounded-full bg-white z-10"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleLike(tuto.id);
                  }}>
                  <Heart size={24} fill={isLiked ? "black" : "none"} stroke="black" />
                </div>

                <div className="absolute bottom-2 right-2  z-10">
                  <MoreHorizontal size={32} fill="white" stroke="white" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
