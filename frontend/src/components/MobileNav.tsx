import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";

export default function MobileNav() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500"/>
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle>
                <span>
                    Welcome to MernEats!
                </span>
            </SheetTitle>
            <Separator/>
            <SheetDescription className="flex">
                <Button className="felx-1 font-bold bg-orange-500">Log in</Button>
            </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  )
}
