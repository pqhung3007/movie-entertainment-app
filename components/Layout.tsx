import React from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
