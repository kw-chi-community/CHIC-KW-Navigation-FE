import React from "react";
import Navbar from "./layout/Navbar";
import Header from "./layout/Header/Header";

type LayoutPT = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutPT) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
      <Navbar />
      <Header />
    </div>
  );
};

export default Layout;
