import React from "react";
import Button from "./Button";
import IconApp from "./IconApp";
import Navbar from "./Navbar";
import StylesMenu from './StylesMenu';

const Header : React.FC =()=>{
    return(
        <header className="relative flex flex-row justify-between 
            p-2"
        >
            <IconApp />
            <Navbar />
            <Button />
            <StylesMenu />
        </header>
    )
}
export default Header;