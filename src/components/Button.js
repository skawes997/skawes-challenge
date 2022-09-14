import React from 'react'

const Button = ({title,className}) => {
  return (
    <>
    <div className='btn-wrapper'>
        <button className={className}>{title}</button>
    </div>
    </>
  )
}

export default Button