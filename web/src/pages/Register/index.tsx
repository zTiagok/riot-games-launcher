import { useState } from "react";
import { useNavigate } from "react-router";

import DefaultInput from "../../components/DefaultInput";

import iLoginArrow from '../../assets/images/login-arrow.png';
import iLoginArrowDisabled from '../../assets/images/login-arrowD.png';
import iMark from '../../assets/images/mark.png';

function Register() {
  const [index, setIndex] = useState(0);
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirm, setRegisterConfirm] = useState('');
  const navigation = useNavigate();

  const registerIndex = [
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-typoldBold text-4xl"> Create an username! </h1>
        <h2 className="font-typoldRegular text-2xl"> Used to make login in all our games.</h2>
      </div>
      <form className='flex flex-col mt-8 w-2/4' id="loginForm" action="/" method="POST">
        <div>
          {registerUsername && <label htmlFor='registerUsername'
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
      <div className="flex flex-col font-typoldMedium text-gray-400 mb-8 mt-8 gap-1">
        {(index === 0 && registerUsername.length < 6) ?
          <div className="flex justify-start items-center gap-2 h-6">
            <img src={ iMark } alt={ iMark } width={26} />
            <span> Your username must contain at least 6 characters. </span>
          </div> : <div className="h-6"/>
        }
      </div>
    </>
    ,
    <>
    <div className="flex flex-col items-center">
      <h1 className="font-typoldBold text-4xl"> Create a password! </h1>
      <h2 className="font-typoldRegular text-2xl"> Create a good password to login.</h2>
    </div>
    <form className='flex flex-col mt-8 w-2/4' id="loginForm" action="/" method="POST">
      <div>
        {registerPassword && <label htmlFor='registerPassword'
        className='tracking-tight uppercase font-typoldBold 
        text-gray-400 text-xs relative top-[22px] left-2.5'> 
          Password
        </label> }
        <br />
        <DefaultInput id="registerPassword"
        maxCharacters={20}
        minCharacters={6}
        name='Password'
        type="password"
        onChange={(e) => setRegisterPassword((e.target as HTMLInputElement).value)}
        value={registerPassword}
        placeholder="Password"
        />
      </div>
      <div>
        {registerConfirm && <label htmlFor='registerConfirm'
        className='tracking-tight uppercase font-typoldBold 
        text-gray-400 text-xs relative top-[22px] left-2.5'> 
          Confirm Password
        </label> }
        <br />
        <DefaultInput id="registerConfirm"
        maxCharacters={20}
        minCharacters={6}
        name='ConfirmPassword'
        type="password"
        onChange={(e) => setRegisterConfirm((e.target as HTMLInputElement).value)}
        value={registerConfirm}
        placeholder="Confirm Password"
        />
      </div>
    </form>
    <div className="flex flex-col font-typoldMedium text-gray-400 mb-8 mt-8 gap-1 w-3/5">
        {(index === 1 && registerPassword.length < 8) ?
          <div className="flex justify-start items-center gap-2 h-6">
            <img src={ iMark } alt={ iMark } width={26} />
            <span> Your password must contain at least 8 characters. </span>
          </div> : <div className="h-6"/>
        }
        {(index === 1 && !(registerPassword === registerConfirm)) ?
          <div className="flex justify-start items-center gap-2 h-6">
            <img src={ iMark } alt={ iMark } width={26} />
            <span> Your passwords must be the same. </span>
          </div> : <div className="h-6"/>
        }
      </div>
  </>
  ]

  const handleButton = () => {
    if (index === 0) {
      setIndex(1)
    } if (index >= 1) {
      return navigation('/')
    }
  }

  const nextButtonHTML = () => {
    if ((index === 0 && registerUsername.length >= 6) 
    || (index === 1 && (registerPassword.length >= 8 && registerConfirm === registerPassword))) {
      return (
        <button className='flex justify-center items-center bg-red-500 w-20 h-20 rounded-3xl'
        type="button"
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
    <div className='flex justify-center bg-white w-full h-full tracking-tight'>
      <div className="bg-registerSplash bg-cover h-full w-1/4"/>
      <div className='flex flex-col justify-center items-center bg-white w-2/4 h-full'>
        {registerIndex[index]}
        {nextButtonHTML()}
      </div>
      <div className="bg-registerSplash bg-cover bg-[-550px] h-full w-1/4"/>
    </div>
  )
}

export default Register;