import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Kiri */}
      <button className="font-bold text-xl">
        inve<span className="text-green-700">te</span>
      </button>

      {/* Tengah */}
      <div className="flex items-center gap-2">
        <Button variant="ghost">Beranda</Button>
        <Button variant="ghost">Layanan</Button>
        <Button variant="ghost">Produk</Button>
        <Button variant="ghost">Testimoni</Button>
        <Button variant="ghost">FAQ</Button>
      </div>

      {/* Kanan */}
      <div className="flex items-center gap-2">
        <Button variant="default">Login</Button>
        <Button variant="outline">Sign Up</Button>
      </div>
    </div>
  );
}
