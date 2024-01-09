import React from 'react'
import { Articulo } from '../type'
import { useDarkMode } from '../context/ModeContext'

interface Props {
    product: Articulo
}

const RecommendedProduct : React.FC <Props> =  ({product}) => {

    const {articulo, seccion, precio, envioGratis, descuento} = product;

    const { themeMode } = useDarkMode();

    return (
        <div className={`flex flex-col gap-3 w-[80%] rounded-md pt-2 pb-2 cursor-pointer
        ${themeMode === 'darkMode' ? 'shadow-lg text-text-dark bg-card-dark hover:bg-slate-800 hover:border-slate-100' 
        : themeMode === 'neonMode' ? 'text-white drop-shadow-neon-drop-shadow border border-white hover:bg-slate-900' 
            : 'shadow-md hover:bg-gray-100 hover:border-white'}`} >
                    
            <div className='grid grid-cols-2'>
                <span className='underline'> {articulo} </span>
                <span className='text-2xl'> {new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(precio)} </span>
            </div>
            {
                descuento ?    
                    <span 
                        className='line-through text-red-500 text-xl'
                    > 
                        {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(
                        precio + (precio * (descuento/100)))}
                    </span>
                :
                    ""
            }
            
        </div>
    )
}

export default RecommendedProduct