"use client";
import { Heart, MoreHorizontal } from "lucide-react";
import tutos from "@/data/tutos.json";
import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchRedirectBar from "@/components/SearchRedirectBar";

export default function Page() {
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());
  const user = null; // Simule absence de session

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
      <main className="min-h-screen pt-24 px-4 py-8">
        <SearchRedirectBar></SearchRedirectBar>
        <div className="columns-2 space-y-4 px-2 h-full">
          {tutos.slice(0, 1).map((tuto) => {
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

                  <div className="absolute bottom-2 right-2 z-10">
                    <MoreHorizontal size={32} fill="white" stroke="white" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
