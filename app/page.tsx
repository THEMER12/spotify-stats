"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {status === "loading" ? (
        <p>Cargando sesión...</p>
      ) : session ? (
        <>
          <p className="mb-4 text-lg">¡Hola, {session.user?.name}!</p>
          <button
            onClick={() => signOut()}
            className="px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-xl shadow-lg hover:bg-red-700 transition-all"
          >
            Cerrar sesión
          </button>
        </>
      ) : (
        <button
          onClick={() => signIn("spotify")}
          className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-xl shadow-lg hover:bg-green-700 transition-all"
        >
          Conectar con Spotify
        </button>
      )}
    </div>
  );
}
