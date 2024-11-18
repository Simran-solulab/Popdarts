import React from 'react'

const Button = ({text, className}) => {
  return (
    <div className={`w-full  py-6 rounded-[24px] text-center text-white font-denim font-[700] bg-[#2B99FF] ${className}`} >{text}</div>
  )
}

export default Button