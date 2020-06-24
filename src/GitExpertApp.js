import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GitExpertApp = props => {

    
    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleApp = () => {
    //     setCategories([...categories, 'jose']); 
    // }
            
    return (
        <div>
            <h1>Buscador de Gif :)</h1>
            <AddCategory setCategories={setCategories}/>
            <ol>
                { categories.map( category => {
                    console.log("envio",category);
                    return <GifGrid key={category} category = {category} />
                })}
            </ol>
            <hr/>
        </div>
    )
}


export default GitExpertApp
