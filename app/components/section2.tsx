"use client";
import { signIn } from "next-auth/react";

export default function Section2() {
  return (
    <section className="relative w-full h-screen mt-12 sm:mt-16 md:mt-50 flex items-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dconyhcgm/video/upload/14426676_3384_1440_24fps_gzgews.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-left pl-6 sm:pl-10 md:pl-20 lg:pl-32 max-w-md sm:max-w-lg md:max-w-4xl">
        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 leading-snug sm:leading-tight md:leading-snug">
          Unlock your music with<span className="text-[var(--orange-web)]"> <i>Tracklytics</i>™</span>. <br />
          See your stats. <br /> Own your sound.
        </h2>

        <button 
        onClick={() => signIn("spotify", { callbackUrl: "/profile" })}
        className="px-6 py-3 sm:px-8 sm:py-4 bg-[var(--orange-web)] text-black rounded-xl text-lg sm:text-xl font-semibold uppercase hover:bg-orange-500 transition">
          Connect with Spotify
        </button>
      </div>
    </section>
  );
}
