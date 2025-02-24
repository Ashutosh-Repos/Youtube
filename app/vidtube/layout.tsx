import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideNav from "@/components/SideNav";

export default function CommmonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {" "}
      <Header />
      <div className="w-full h-[calc(100vh-4rem)] relative flex">
        <SideNav />
        {children}
      </div>
    </>
  );
}
