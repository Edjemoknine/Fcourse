import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Navigation from "./Navigation";
type Props = {
  open: boolean;
  setOpen: (item: boolean) => void;
};
export function MobileNavigation({ open, setOpen }: Props) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex justify-center items-start pt-24">
        <Navigation />
      </SheetContent>
    </Sheet>
  );
}
