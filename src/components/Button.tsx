import React from "react";

const Button : React.FC =()=>{
    return(
        <button className="bg-blue-600 text-white border-2 w-[5%] border-white rounded-md text-black pl-2 pr-2 transition-all
            hover:text-blue-600 hover:bg-white hover:border-blue-600"
        >
            Login
        </button>
    );
}

export default Button;