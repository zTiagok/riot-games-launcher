import imageLogo from '../../../public/assets/logo.png';

function Login() {
  return (
    <div className="flex justify-center shadow-2xl h-full">
      <div className="flex flex-col justify-between items-center bg-blue-500 w-1/3">
        <img src={ imageLogo } alt='Riot Launcher' className="w-56 -mb-8" />
        <h1> Sign In </h1>
        <form className='flex flex-col justify-center items-end mb-2'>
          <div>
            <label htmlFor="inputUsername"> Username </label>
            <br />
            <input type="text" name="inputUsername" id="inputUsername"
            className='w-64'/>
          </div>
          <div>
            <label htmlFor="inputPassword"> Password </label>
            <br />
            <input type="text" name="inputPassword" id="inputPassword"
            className='w-64'/>
          </div>
        </form>
        <div className='flex justify-center gap-4 w-full'>
          <div className='bg-green-500 w-28 h-10 text-sm'>Placeholder</div>
          <div className='bg-green-500 w-28 h-10 text-sm'>Placeholder</div>
          <div className='bg-green-500 w-28 h-10 text-sm'>Placeholder</div>
        </div>
        <div className='self-start ml-16'>
          <input type="checkbox" name="inputStay" id="inputStay" />
          <label htmlFor='inputStay'> Stay signed in </label>
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

      <div className="bg-red-500 w-3/4">

      </div>
    </div>
  )
}

export default Login