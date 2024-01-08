import React from 'react'
import { Articulo } from '../type'

interface Props {
    product: Articulo
}

const RecommendedProduct : React.FC <Props> =  ({product}) => {

    const {articulo, seccion, precio, envioGratis, descuento} = product;
    
    return (
        <div className='flex flex-col gap-3 border-2 border-gay-200 w-[80%] rounded-md pt-2 pb-2 cursor-pointer
            hover:bg-gray-100'
        >
            <div className='grid grid-cols-2'>
                <span className='font-semibold'> {articulo} </span>
                <span className='underline text-2xl'> {new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(precio)} </span>
            </div>
            {
                descuento ?    
                    <span 
                        className='line-through text-red-500 text-xl'
                    > 
                        Precio anterior {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(
                        precio + (precio * (descuento/100)))}
                    </span>
                :
                    ""
            }
            
        </div>
    )
}

export default RecommendedProduct