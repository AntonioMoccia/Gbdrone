import React from 'react'

function TextField({ type, name, label }) {
    return (
        <div className='flex flex-col'>
            <label htmlFor={name} className='text-white'>{label}</label>
            <input className='rounded w-full h-10 mt-2 focus:outline-white' name={name} id={name} type={type} />
        </div>
    )
}

export default TextField