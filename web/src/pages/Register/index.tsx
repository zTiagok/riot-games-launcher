import { useState } from "react";
import DefaultInput from "../../components/DefaultInput";
import iLoginArrow from '../../assets/images/login-arrow.png';
import iLoginArrowDisabled from '../../assets/images/login-arrowD.png';

function Register() {
  const [index, setIndex] = useState(0);
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirm, setRegisterConfirm] = useState('');

  const registerIndex = [
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-typoldBold text-4xl"> Create an username! </h1>
        <h2 className="font-typoldRegular text-2xl"> Used to make login in all our games.</h2>
      </div>
      <form className='flex flex-col -mt-4 mb-8 w-2/4' id="loginForm" action="/" method="POST">
        <div>
          {registerUsername && <label htmlFor='inputUsername'
          className='tracking-tight uppercase font-typoldBold 
          text-gray-400 text-xs relative top-[22px] left-2.5'> 
            Username
          </label> }
          <br />
          <DefaultInput id="registerUsername"
          maxCharacters={20}
          minCharacters={6}
          name='Username'
          type="text"
          onChange={(e) => setRegisterUsername((e.target as HTMLInputElement).value)}
          value={registerUsername}
          placeholder="Username"
          />
        </div>
      </form>
    </>
  ]

  const handleButton = () => {
    if (index === 0) {
      setIndex(1)
    }
  }

  const nextButtonHTML = () => {
    if ((index === 0 && registerUsername.length >= 6) 
    || (index === 1 && registerPassword.length >= 8)) {
      return (
        <button className='flex justify-center items-center bg-red-500 w-20 h-20 rounded-3xl'
        onClick={() => handleButton()}
        >
          <img src={ iLoginArrow } alt={ iLoginArrow } width={64}/>
        </button>
      )
    } else {
      return (
        <button className='flex justify-center items-center bg-white border-4 border-gray-200
        w-20 h-20 rounded-3xl cursor-default'
        disabled>
          <img src={ iLoginArrowDisabled } alt={ iLoginArrowDisabled } width={64}/>
        </button>
      )
    }
  }

  return (
    <div className='flex justify-center bg-gray-700 w-full h-full tracking-tight'>
      <div className='flex flex-col justify-center items-center bg-white w-2/4 h-full'>
        {registerIndex[index]}
        {nextButtonHTML()}
      </div>
    </div>
  )
}

export default Register;