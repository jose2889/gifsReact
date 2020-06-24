import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [input, setInput] = useState('')

    const handleChangeInput = (e) => {
        
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim().length > 2) {
            setCategories((cats) =>{
             return [input, ...cats]; 
            });
            setInput('');
        }
      
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={input}
            onChange={handleChangeInput}
            />
            </form>
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
