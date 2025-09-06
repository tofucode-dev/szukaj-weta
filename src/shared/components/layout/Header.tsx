// src/shared/components/layout/Header.tsx
import React from "react";
import { PawPrint } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function Header() {
  return (
    <nav className="backdrop-blur-md sticky top-4 z-50">
      <Card>
        <CardContent>
          <div className="flex items-center space-x-2">
            <PawPrint className="h-10 w-10 text-primary" />
            <span className="text-4xl text-foreground font-pacifico">
              SzukajWeta.pl
            </span>
          </div>
        </CardContent>
      </Card>
      {/*    <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
          
          </div>
        </div>
      </div> */}
    </nav>
  );
}
