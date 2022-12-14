import { useState } from 'react';
import imageLogo from '../../assets/images/logo.png';
import DefaultInput from '../../components/DefaultInput';
import SocialButton from '../../components/SocialButton';

import iGoogle from '../../assets/images/google.png';
import iFacebook from '../../assets/images/facebook.png';
import iApple from '../../assets/images/apple.png';
import iLoginArrow from '../../assets/images/login-arrow.png';
import iLoginArrowDisabled from '../../assets/images/login-arrowD.png';
import iShowPassword from '../../assets/images/password-show.png'
import iHidePassword from '../../assets/images/password-hide.png'

function Login() {
  const [usernameState, setUsernameState] = useState('')
  const [passwordState, setPasswordState] = useState('')
  const [passwordInputState, setPasswordInputState] = useState('password')

  const loginButtonHTML = () => {
    if (usernameState.length >= 6 && passwordState.length >= 8) {
      return (
        <button className='flex justify-center items-center bg-red-500 w-20 h-20 rounded-3xl'
        type='submit'
        form='loginForm'
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

  const passwordHideShow = () => {
    if (passwordInputState === 'password') {
      return (
        <img className='relative -mt-12 left-[280px] top-[60px] w-6 h-6' src={iShowPassword}
        onClick={() => setPasswordInputState('text')} />
      )
    }

    if (passwordInputState === 'text') {
      return (
        <img className='relative -mt-12 left-[280px] top-[60.2px] w-6 h-6' src={iHidePassword}
        onClick={() => setPasswordInputState('password')} />
      )
    }
  };

  return (
    <div className='flex justify-center h-full'>
      <div className='flex flex-col justify-around items-center  w-1/3'>
        <img src={ imageLogo } alt='Riot Launcher' className='w-44 -mt-6' />
        <h1 className='font-typoldBold text-3xl -mt-5 tracking-tighter'> Sign In </h1>
        <div className='w-3/4'>
          <form className='flex flex-col -mt-4 mb-8' id="loginForm" action="/" method="POST">
            <div>
              {usernameState && <label htmlFor='inputUsername'
              className='tracking-tight uppercase font-typoldBold 
              text-gray-400 text-xs relative top-[22px] left-2.5'> 
                Username
              </label> }
              <br/>
              <DefaultInput type='text' id='inputUsername' name='inputUsername'
              placeholder='Username'
              value={ usernameState }
              onChange={ (e) => setUsernameState((e.target as HTMLInputElement).value)}
              maxCharacters={ 25 }
              minCharacters={ 6 }/>
            </div>
            <div>
              {passwordState &&
              <>
                <label htmlFor='inputPassword'
                className='tracking-tight uppercase font-typoldBold
                text-gray-400 text-xs relative top-[22px] left-2.5'> 
                  Password
                </label> 
                {passwordHideShow()}
              </> 
              }
              <br />
              <DefaultInput type={passwordInputState} id='inputPassword' name='inputPassword'
              placeholder='Password'
              value={ passwordState }
              onChange={ (e) => setPasswordState((e.target as HTMLInputElement).value)}
              maxCharacters={ 25 }
              minCharacters={ 8 }/>
            </div>
          </form>
          <div className='flex justify-center gap-4 mb-2'>
            <SocialButton bgColor='bg-blue-500' imageUrl={iFacebook} />
            <SocialButton bgColor='bg-gray-200' imageUrl={iGoogle} />
            <SocialButton bgColor='bg-black' imageUrl={iApple} />
          </div>
          <div className='self-start flex items-center gap-2 mt-4'>
            <input type='checkbox' name='inputStay' id='inputStay' className='accent-red-500' />
            <label htmlFor='inputStay' className='font-typoldMedium text-sm tracking-tight text-gray-500'> 
              Stay signed in
            </label>
          </div>
        </div>
        {loginButtonHTML()}
        <nav className='flex flex-col justify-evenly h-20 w-full items-center text-xs uppercase font-typoldBold tracking-tight text-gray-400'>
          <a href="/wip"> Can't sign in? </a>
          <a href="/signup"> Create account </a>
          <a href='https://www.linkedin.com/in/ztiagok/'> Visit my LinkedIn </a>
          <span className='self-end mr-2 -mb-8'> v1.0 </span>
        </nav>
      </div>

      <div className='bg-loginSplash bg-cover bg-no-repeat bg-bottom w-3/4'>

      </div>
    </div>
  )
}

export default Login