import React, {useState, useEffect} from "react";
import {data, fetchArticulo} from '../data';
import { Articulo } from "../type";
import { useDarkMode } from "../context/ModeContext";

const Products : React.FC =()=>{

    const dataSlice : Articulo[] = data.slice(0,9);

    const [search, setSearch] = useState<string>("");
    
    const [articulos, setArticulos] = useState<Articulo[]>([]);

    const {themeMode} = useDarkMode();

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
                    className={`w-[50%] pt-2 pb-2 pl-2 rounded-md border-2 focus:outline-none
                        ${themeMode === 'darkMode' ? 'border-card-dark bg-card-dark text-indigo-300' 
                            : themeMode === 'neonMode' ? 'text-white bg-black drop-shadow-noen-drop-shadow border-gray-500' 
                                :'border-gray-300 bg-white'
                        }
                    `}
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
            </div>
            <div className="w-[100%] grid xl:grid-cols-3 xl:gap-4 grid-cols-2 gap-1 gap-y-8">
                {articulos.map((data, index) =>(
                    <div    
                        key={index}
                        className={`flex flex-col w-[80%] rounded-md cursor-pointer 
                        ${themeMode === 'darkMode' ? 'shadow-lg text-text-dark bg-card-dark hover:bg-slate-800 hover:border-slate-100' 
                            : themeMode === 'neonMode' ? 'text-white drop-shadow-neon-drop-shadow border border-white hover:bg-slate-900' 
                                : 'shadow-md hover:bg-gray-100 hover:border-white'}`} 
                    >
                        <span className="text-center mt-3 underline underline-offset-2">{data.articulo}</span>
                        <div className="flex flex-row mt-4 justify-around">
                            {data.descuento > 0 &&
                                <span className="">Descuento 
                                    <span className="text-red-700 font-bold"> % {data.descuento}</span>
                                </span>
                            }
                            {data.envioGratis &&
                                <span className="text-green-700 "> Envio gratis </span>
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