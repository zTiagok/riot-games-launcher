import React from 'react'

interface ISocialButton extends React.HTMLAttributes<HTMLButtonElement>{

}

function SocialButton({...props}: ISocialButton) {
  return (
    <div>
      <button
      {...props}
      >
        
      </button>
    </div>
  )
}

export default SocialButton