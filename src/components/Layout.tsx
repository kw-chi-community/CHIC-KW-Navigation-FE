import React from "react";

type LayoutPT = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutPT) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>

    </div>
  );
};

export default Layout;
