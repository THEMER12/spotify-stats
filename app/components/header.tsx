"use client";

export default function Header() {
  return (
    <header
    className="w-full h-90 bg-cover bg-center"
    style={{ backgroundImage: "url('/header.jpg')" }}
    >
    <div className="flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Hello</h1>
    </div>
    </header>


  );
}
