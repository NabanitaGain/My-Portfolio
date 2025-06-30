import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FlatFooter from "../components/FlatFooter";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      {/* ন্যাভবারের উচ্চতা ধরে রাখতে pt-20 */}
      <main className="pt-20">
        <Outlet />
        <FlatFooter />
      </main>
    </>
  );
}
