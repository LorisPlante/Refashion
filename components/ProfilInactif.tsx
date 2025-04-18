"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProfilInactif() {
  const [isHidden, setHidden] = useState<Boolean>(false);
  return (
    <div className={`fixed top-0 left-0 min-h-screen w-full px-6 py-12  flex-col items-center justify-center text-center z-[999999] ${isHidden ? "hidden" : "flex"}`}>
      {/* Fond flouté */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0" />

      <div className="z-10">
        <h1 className="text-xl font-semibold mb-6">Connectez-vous dès maintenant pour voir votre profil</h1>

        <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
          <Link href="" className="bg-orange text-white py-3 px-6 rounded-xl text-base font-semibold" onClick={() => setHidden(true)}>
            Se connecter
          </Link>

          <Link href="" className="border border-black text-black py-3 px-6 rounded-xl text-base font-semibold">
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  );
}
