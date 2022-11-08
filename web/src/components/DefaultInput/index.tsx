import React from 'react'

interface IDefaultInput extends React.HTMLAttributes<HTMLInputElement> {
  type: string,
  id: string,
  name: string,
  maxCharacters: number,
  value?: any
}

function DefaultInput({type, id, name, maxCharacters, value, ...props}: IDefaultInput) {
  return (
    <div>
      <input
      type={ type }
      id={ id }
      name={ name }
      value={ value }
      maxLength={ maxCharacters }
      className="px-2 w-full h-12 rounded-md
      border-2 border-black 
      outline-none
      pt-2
      placeholder-shown:uppercase
      placeholder-shown:bg-gray-200
      placeholder-shown:border-gray-200
      placeholder-shown:tracking-tighter
      placeholder-shown:text-sm
      placeholder-shown:pt-0
      placeholder-shown:font-typoldBold"
      {...props}
      />
    </div>
  )
}

export default DefaultInput;