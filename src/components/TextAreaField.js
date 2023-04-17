import React from 'react'

function TextAreaField({  name, label }) {
    return (
        <div className='flex flex-col'>
            <label htmlFor={name} className='text-white'>{label}</label>
            <textarea className='rounded w-full mt-1' name={name} />
        </div>
    )
}

export default TextAreaField