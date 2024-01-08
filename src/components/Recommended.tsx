import React, { useState, useEffect } from "react";
import { data } from "../data";
import { Articulo } from "../type";
import RecommendedProduct from "./RecommendedProduct";

const Recommended : React.FC =()=>{

    const [products, setProducts] = useState<Articulo[]>([]);

    useEffect(() =>{
        setProducts(data.slice(0,3));
    },[]);

    return(
        <section className="flex flex-col justify-center text-center mt-20">
            <h2 className="text-xl font-semibold"> Productos recomendados </h2>
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