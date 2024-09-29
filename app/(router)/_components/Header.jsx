import { Button } from "@/components/ui/button";
import { BellDot, Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-4 bg-white flex justify-between">
      {/* Search Bar */}
      <div className="flex gap-2 border rounded-md p-2">
        <Search className="h-5 w-5"></Search>
        <input type="text" placeholder="Search..." className="outline-none" />
      </div>

      {/* Get Started Button & Bell Icon */}
      <div className="flex items-center gap-4">
        <BellDot className="text-gray-500" />
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
