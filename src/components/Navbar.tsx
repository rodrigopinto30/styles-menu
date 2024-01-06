import React from "react";
import { tabs } from "../data";

const Navbar : React.FC =()=>{
    return(
        <nav className="flex flex-row w-[50%]">
            <ul className="flex flex-row w-[100%]">
                {tabs.map((tab, index)=>(
                    <li 
                        key={index}
                        className="pl-3">
                        <a 
                            href="/"
                            className="p-1 transition-all hover:bg-gray-100 
                                hover:underline hover:underline-offset-4 "
                            > 
                            {tab}
                        </a> 
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;