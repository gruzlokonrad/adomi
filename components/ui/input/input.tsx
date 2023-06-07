import { clsx } from 'clsx'
import React from 'react'

type typeButton = 'text' | 'email'

interface IInput {
  placeholder: string
  name: string
  outlined?: boolean
  className?: string
  type: typeButton
}

const Input = ({ placeholder, name, outlined, className, type }: IInput) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      className={clsx(
        className,
        {'bg-transparent ': outlined},
        'px-4 py-3 placeholder:text-white/75 placeholder:text-center border border-1 border-white',
        'w-full lg:w-3/4 max-w-sm'
      )}
    />
  )
}

export default Input