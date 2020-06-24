import React from 'react'

const GitGridItems = ({img}) => {

    return (
        <div className="card animate__animated animate__fadeIn"> 
            <img src={img.url} alt={img.title}/>
            <p>{img.title}</p>
        </div>
    )
}

export default GitGridItems
