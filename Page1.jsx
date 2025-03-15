import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function Page1(params) {

  const wel = 'Welcome to Earth'
  const greet = 'Thank you for choosing Earth as your home!'

  return (<div className="p1Container">
    <div className='nav'>
      <img src={reactLogo} alt="picture" className='navlogo' />
      <img src={viteLogo} alt="picture_bell" className='navlogo2' />
    </div>
    <div className='LogoContainer'>
      <img src={reactLogo} alt="logo" className='logo' />
    </div>
    <h1>{wel}</h1>
    <p>{greet}</p>
    <a href="https://www.youtube.com/"><button>
      Sign Up
    </button></a>
    
  </div>)

}
export default Page1