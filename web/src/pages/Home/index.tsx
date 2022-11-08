import { useState } from 'react';
import imageLogo from '../../assets/images/logo.png';
import DefaultInput from '../../components/DefaultInput';

function Login() {
  const [usernameState, setUsernameState] = useState('')
  const [passwordState, setPasswordState] = useState('')

  return (
    <div className='flex justify-center shadow-2xl h-full'>
      <div className='flex flex-col justify-around items-center  w-1/3'>
        <img src={ imageLogo } alt='Riot Launcher' className='w-44 -mb-8' />
        <h1 className='font-typoldMedium text-3xl tracking-tighter'> Sign In </h1>
        <div className='w-3/4'>
          <form className='flex flex-col mb-2'>
            <div>
              <label htmlFor='inputUsername'> Username </label>
              <br />
              <DefaultInput type='text' id='inputUsername' name='inputUsername'
              placeholder='Username'
              value={ usernameState }
              onChange={ (e) => setUsernameState((e.target as HTMLInputElement).value)}
              maxCharacters={ 25 }/>
            </div>
            <div>
              <label htmlFor='inputPassword'> Password </label>
              <br />
              <DefaultInput type='password' id='inputPassword' name='inputPassword'
              placeholder='Password'
              value={ passwordState }
              onChange={ (e) => setPasswordState((e.target as HTMLInputElement).value)}
              maxCharacters={ 40 }/>
            </div>
          </form>
          <div className='flex justify-center gap-4 w-full'>
            <div className='bg-green-500 w-28 h-10 text-sm'>Placeholder</div>
            <div className='bg-green-500 w-28 h-10 text-sm'>Placeholder</div>
            <div className='bg-green-500 w-28 h-10 text-sm'>Placeholder</div>
          </div>
          <div className='self-start'>
            <input type='checkbox' name='inputStay' id='inputStay' />
            <label htmlFor='inputStay'> Stay signed in </label>
          </div>
        </div>
        <div className='bg-orange-500 w-24 h-24 mt-16'>
          LOGIN
        </div>
        <nav>
          <p> Can't sign in? </p>
          <p> Create account </p>
          <p> Visit my LinkedIn </p>
        </nav>
      </div>

      <div className='bg-red-500 w-3/4'>

      </div>
    </div>
  )
}

export default Login