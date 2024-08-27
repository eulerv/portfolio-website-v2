"use client";

import Footer from "../layout/footer";
import GradientsOnePage from "../layout/home/gradientsOnePage";
import HomeDiv3 from "../layout/home/homeDiv3";
import Navbar from "../layout/menus/navbar";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div className="items-top w-full">
        <Navbar />
      </div>
      <div className="absolute z-[-1] min-w-full">
        <GradientsOnePage />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          {/* Seção 3 */}
          <div className="min-h-screen w-full">
            <HomeDiv3 />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
