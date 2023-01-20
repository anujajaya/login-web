import './signup.css'
import Sign from './sign'
import { useLocation } from 'react-router-dom'
const Signup = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div className='main'>
      <div className='sigdec'>
        <h1 className='wel'>Welcome {location?.state?.firstname}</h1>
        <h3 className='lohed'> LOGO </h3>
        <div className='lode'>
          <a href='#'>Home</a>
          <a href='#'>Blog</a>
          <a href='#'>Profile</a>
          <a href='#'>Contact us</a>
        </div>
      </div>
    </div>
  )
}
export default Signup
