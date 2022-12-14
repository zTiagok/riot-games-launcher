import './input.css'
import Routes from './router'

function App() {

  return (
    <div className="App fixed bg-neutral-400 top-0 left-0 w-full h-full select-none">
      <div className='relative bg-white 
      w-3/4 h-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      shadow-app'>
        <Routes />
      </div>
    </div>
  )
}

export default App
