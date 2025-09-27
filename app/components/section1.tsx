"use client";

export default function Section1() {
  return (
    <section
      className="
        flex items-center justify-center 
        mt-12 sm:mt-16 md:mt-20 lg:mt-28 
        px-6 sm:px-10 md:px-20 lg:px-40
      "
    >
      <div className="max-w-6xl text-center">
        <h1
          className="
            uppercase 
            text-[1.2rem] sm:text-[1.6rem] md:text-[2.2rem] lg:text-[2.9rem] 
            leading-10 sm:leading-10 md:leading-10 lg:leading-20
            text-[var(--platinum)]
          "
        >
          <i className="text-[var(--orange-web)]">Tracklytics™</i> lets you
          explore your own music world. Discover your most played songs, track
          your listening habits, and get a clear view of your personal sound. All
          your favorite tracks, trends, and stats in one place.
        </h1>
      </div>
    </section>
  );
}
