"use client";

import Main from "../apiPicpay/login/page";
import Footer from "../layout/footer";
import Navbar from "../layout/menus/navbar";
import Sidebar from "../layout/menus/sidebar";

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