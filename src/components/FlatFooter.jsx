import React from "react";

const FlatFooter = () => {
  return (
    <footer className="bg-[#1A1A40] text-white py-4 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved. Designed by Nabanita Gain</p>
      </div>
    </footer>
  );
};

export default FlatFooter;
