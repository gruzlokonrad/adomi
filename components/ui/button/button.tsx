import React from 'react'

interface IButton {
  children: React.ReactNode
}

const Button = ({ children }: IButton) => {
  return (
    <button
      className='
        px-4 py-3 
        my-2 lg:my-0 lg:mx-2
        text-center text-red 
        font-semibold
        bg-white 
        border border-1 border-white
        w-full lg:w-1/5 max-w-sm min-w-fit
      '
    >{children}</button>
  )
}

export default Button