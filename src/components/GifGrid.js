import React, { useState, useEffect } from 'react'
import GitGridItems from './GitGridItems'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({category}) => {

  const {data:images, loading} = useFetchGifs(category); 
   
    return (
        <>
            <h1 className="animate__animated animate__fadeIn">{category}</h1>
            { loading && <p className="animate__animated animate__flash">Cargando...</p> }
            <div className="card-grid">
                { images.map( item => <GitGridItems key={item.id} img={item} /> )}
            </div>
        </>
    )
}


export default GifGrid
