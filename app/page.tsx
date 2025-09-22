"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <button
        onClick={() => signIn("spotify")}
        className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-xl shadow-lg hover:bg-green-700 transition-all"
      >
        Conectar con Spotify
      </button>
    </div>
  );
}
