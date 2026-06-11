import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Home,
  LayoutGrid,
  Package,
  Quote,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Beranda", icon: Home },
  { label: "Layanan", icon: LayoutGrid },
  { label: "Produk", icon: Package },
  { label: "Testimoni", icon: Quote },
  { label: "FAQ", icon: HelpCircle },
];

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center justify-between px-4 h-14 border-b bg-background">
        <button className="font-bold text-xl">
          inve<span className="text-green-700">te</span>
        </button>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9"
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 z-50 bg-background border-b shadow-sm">
          <div className="px-4 py-2">
            {navItems.map(({ label, icon: Icon }) => (
              <button
                key={label}
                className="flex items-center gap-3 w-full py-3 text-sm text-muted-foreground border-b last:border-0 hover:text-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
            <div className="flex gap-2 pt-3 pb-1">
              <Button className="flex-1">Login</Button>
              <Button variant="outline" className="flex-1">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
