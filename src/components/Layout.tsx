import React from "react";

type LayoutProp = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProp): JSX.Element {
  return (
    <div className="flex flex-row p-4">
      {/* Sidebar */}
      <div className="flex flex-col gap-2 w-1/12">
        <h1 className="font-bold text-xl">Finance Situation</h1>
        <ul className="flex flex-col gap-4">
          <li>Dashboard</li>
          <li>Profile</li>
        </ul>
      </div>
      {/* Navbar & Content */}
      <div className="flex flex-col w-11/12">
        {/* Nav */}
        <div className="ml-auto justify-end mb-4">
          <p>Profile</p>
        </div>
        {/* Main */}
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
