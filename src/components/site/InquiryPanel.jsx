import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import InquiryForm from "./InquiryForm";

export default function InquiryPanel({ pkg, onClose }) {
  return (
    <Sheet open={!!pkg} onOpenChange={(o) => !o && onClose()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-lg overflow-y-auto bg-[#F8FAFC]"
      >
        <SheetHeader className="text-left mb-6">
          <p className="font-mono text-xs tracking-[0.2em] text-[#2563EB]">
            PACKAGE ENQUIRY
          </p>
          <SheetTitle className="text-2xl font-bold text-[#0F172A]">
            {pkg}
          </SheetTitle>
          <SheetDescription>
            Leave your details and we'll call to confirm your slot and answer
            any questions.
          </SheetDescription>
        </SheetHeader>
        {pkg && <InquiryForm key={pkg} defaultPackage={pkg} />}
      </SheetContent>
    </Sheet>
  );
}
