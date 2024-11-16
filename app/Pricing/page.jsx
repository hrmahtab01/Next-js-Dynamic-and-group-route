import { redirect } from "next/navigation";
import React from "react";

export default function page() {
  let datavalue = false;
  if (!datavalue) {
    redirect("/");
  }

  return (
    <div className="text-4xl font-semibold font-mono text-teal-800 text-center mt-2">
      this is Pricing page
    </div>
  );
}
