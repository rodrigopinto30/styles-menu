import React from "react";
import {data} from '../data';
import { Articulo } from "../type";

const Products : React.FC =()=>{

    const dataSlice : Articulo[] = data.slice(0,6);

    return (
        <section className="flex flex-row justify-center mt-10">
            <div className="w-[100%] grid grid-cols-3 gap-4">
                {dataSlice.map((data, index) =>(
                    <div    
                        key={index}
                        className="flex flex-col w-[80%] border-2 border-gray-300 rounded-md cursor-pointer 
                        hover:bg-gray-100 hover:border-white" 
                    >
                        <span className="font-semibold text-center mt-3">{data.articulo}</span>
                        <div className="flex flex-row mt-4 justify-around">
                            {data.descuento > 0 &&
                                <span className="">Descuento 
                                    <span className="text-red-700 font-bold"> % {data.descuento}</span>
                                </span>
                            }
                            {data.envioGratis &&
                                <span className="text-green-700 font-bold"> Envio gratis </span>
                            }
                        </div>
                        <div className="text-center mt-1 mb-3"> Precio: 
                            <span className="font-bold font-md"> $ {data.precio} </span> 
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Products;