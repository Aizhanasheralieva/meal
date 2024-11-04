import React, { PropsWithChildren } from "react";
import Toolbar from "../Toolbar/Toolbar.tsx";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container mt-4">
        <div className="row">{children}</div>
      </main>
    </>
  );
};

export default Layout;
