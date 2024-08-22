"use client";

import Footer from "../layout/footer";
import Navbar from "../layout/menus/navbar";
import Sidebar from "../layout/menus/sidebar";
import Main from "../layout/projects/main";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar/>
      <div className="flex flex-1">
        <Sidebar/>
        <Main></Main>
      </div>
      <Footer/>
    </div>
  );
}