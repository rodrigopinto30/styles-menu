import React, { useState, useEffect } from "react";
import { data } from "../data";
import { Articulo } from "../type";
import RecommendedProduct from "./RecommendedProduct";
import { useDarkMode } from "../context/ModeContext";

const Recommended : React.FC =()=>{

    const [products, setProducts] = useState<Articulo[]>([]);

    useEffect(() =>{
        setProducts(data.slice(0,3));
    },[]);

    const { themeMode } = useDarkMode();

    return(
        <section className="flex flex-col justify-center text-center mt-20">
            <h2 className={`text-2xl font-semibold underline underline-offset-2
                ${themeMode === 'darkMode' ? 'text-text-dark'
                    : themeMode === 'neonMode' ? 'text-white drop-shadow-neon-drop-shadow'
                        : 'black'
                }
            `}> Productos recomendados </h2>
            <div className="grid grid-cols-3 mt-10">
                {
                    products.map((product, index) =>(
                       
                       <RecommendedProduct 
                            key={index}
                            product={product}    
                        /> 
                        
                    ))
                }
            </div>
        </section>
    )
}

export default Recommended;