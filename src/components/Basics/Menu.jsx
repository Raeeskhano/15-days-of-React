import React, { useState } from "react";

const Menu = () => {
  const [menu, setmenu] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setmenu(!menu)}
        className="text-end py-4 absolute top-4 right-0 text-red-500 z-20"
      >
        {menu ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      {menu ? (
        <div className="w-[20vw] h-[100vh] bg-emerald-950 text-white text-center py-4 absolute top-0 right-0 z-10 transition-all duration-300">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Resume</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Menu;
