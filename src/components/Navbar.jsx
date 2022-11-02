import React from "react";

const Navbar = () => {
    return (
        <div className="w-full h-[72px] z-10 flex justify-between px-10 bg-white">
            <div className="flex items-center hover:cursor-pointer">
                <div className="w-4 h-4 bg-orange-600 mr-3 rounded-2xl mt-1 hover:rounded-none hover:bg-blue-500 "></div>
                <h1 className="text-2xl font-semibold">Sophie Brittain</h1>
            </div>
            <ul className="flex items-center">
                <li>Home</li>
                <li>Work</li>
                <li>About</li>
            </ul>
        </div>
    );
};

export default Navbar;
