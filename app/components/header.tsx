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

      <div className=" grid grid-cols-2 items-center px-6 sm:px-10 gap-6">
        <h1 className="
          uppercase 
          text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4.8rem] 
          text-[var(--platinum)]
          "
        >
          GEN. & VIS. in: <br />
          BCN-ESP № 24-MMXXV
        </h1>

        <div className="flex justify-center md:justify-end">
          <img
            src="/logo-black.png"
            alt="logo"
            className="
                h-[7rem] sm:h-[6rem] md:h-[10rem] md:mr-[15rem] lg:h-[15rem] xl:h-[20rem] 
                object-contain
              "
          />
        </div>
      </div>
    </header>
  );
}
