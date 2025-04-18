"use client";

import Link from "next/link";

export default function ProfilInactif() {
  return (
    <div className="min-h-screen px-6 py-12 flex flex-col items-center justify-center relative text-center">
      {/* Fond flouté */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0" />

      <div className="z-10">
        <h1 className="text-xl font-semibold mb-6">Connectez-vous dès maintenant pour voir votre profil</h1>

        <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
          <Link href="/connexion" className="bg-orange text-white py-3 px-6 rounded-xl text-base font-semibold">
            Se connecter
          </Link>

          <Link href="/inscription" className="border border-black text-black py-3 px-6 rounded-xl text-base font-semibold">
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  );
}
