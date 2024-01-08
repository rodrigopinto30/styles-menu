import React, {useState, useEffect} from "react";
import {data, fetchArticulo} from '../data';
import { Articulo } from "../type";

const Products : React.FC =()=>{

    const dataSlice : Articulo[] = data.slice(0,9);

    const [search, setSearch] = useState<string>("");
    
    const [articulos, setArticulos] = useState<Articulo[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          const filteredProduct = await fetchArticulo(search);
          setArticulos(filteredProduct);
        };
    
        fetchData();
      }, [search]);

    return (
        <section className="flex flex-col justify-center mt-10">
            <div className="text-center mt-10 mb-10 pt-5 pb-5">
                <input 
                    type='text'
                    placeholder="Buscar articulo..."
                    className="w-[50%] pt-2 pb-2 pl-2 border-2 border-gray-300 rounded-md focus:outline-none"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
            </div>
            <div className="w-[100%] grid grid-cols-3 gap-4">
                {articulos.map((data, index) =>(
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