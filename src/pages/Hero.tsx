import React from "react";
import Send1 from "../assets/Send1.webp";
import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <section className="w-full px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Kiri — teks */}
        <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-4xl md:text-6xl font-medium leading-tight">
            Partner Undangan
            <br />
            <span className="text-green-600">DigitalMu</span>
          </h1>
          <p className="mt-4 mb-8 text-base md:text-lg text-muted-foreground max-w-sm">
            Buat undangan digital elegan untuk momen spesialmu.
          </p>
          <Button className="w-44 h-11 text-base">Pesan Sekarang</Button>
        </div>

        {/* Kanan — gambar */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={Send1}
            alt="Ilustrasi undangan digital"
            className="w-64 md:w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
  );
}
