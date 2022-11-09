import React from 'react'

interface ISocialButton extends React.HTMLAttributes<HTMLButtonElement>{
  bgColor: string,
  imageUrl: string,
}

function SocialButton({bgColor, imageUrl, ...props}: ISocialButton) {
  return (
    <button
    className={`rounded-md w-28 h-10 flex items-center justify-center ${bgColor}`}
    {...props}
    >
      <img src={imageUrl} alt={imageUrl} width={25} />
    </button>
  )
}

export default SocialButton