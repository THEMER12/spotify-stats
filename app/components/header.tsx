"use client";

export default function Header() {
  return (
    <header>
      <div
        className="
          w-full 
          h-[22rem] sm:h-[28rem] md:h-[35rem] 
          flex items-end 
          bg-cover bg-center
        "
        style={{
          backgroundImage: "url('/header.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="
            ml-6 sm:ml-10 
            mb-4 sm:mb-6 
            uppercase 
            text-[2rem] sm:text-[3rem] md:text-[4.8rem] 
            text-[var(--orange-web)]
          "
        >
          Tracklytics™ <br />
          <i>STATS co.</i>
        </h1>
      </div>

      <div className="flex items-center justify-start">
        <h1
          className="
            ml-6 sm:ml-10 
            mb-4 sm:mb-6 
            uppercase 
            text-[2rem] sm:text-[3rem] md:text-[4.8rem] 
            text-[var(--platinum)]
          "
        >
          GEN. & VIS. in: <br />
          BCN-ESP № 24-MMXXV
        </h1>
      </div>
    </header>
  );
}
