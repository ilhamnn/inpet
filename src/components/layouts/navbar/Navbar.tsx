import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-amber-800 text-xs ">LOGO</h1>
      <Button variant={"outline"}>Button</Button>
    </div>
  );
}
