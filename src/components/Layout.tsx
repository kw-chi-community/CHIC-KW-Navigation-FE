import React from "react";
import Navbar from "./Navbar";
import Header from "./Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
      <Navbar />
      <Header />
    </div>
  );
};

export default Layout;
