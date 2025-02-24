import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";

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
