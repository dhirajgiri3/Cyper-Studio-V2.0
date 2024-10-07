import Home from "@/Components/Home/Home";
import React from "react";
import {Inter} from "next/font/google";

const inter = Inter({
  subsets: ["cyrillic-ext", "cyrillic", "latin"],
});

function page() {
  return (
    <div className={inter.className}>
      <Home />
    </div>
  );
}

export default page;
