import './login.css'
import Head from './head'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Login = () => {
  const location = useLocation()
  console.log(location)
  const { loguser } = useSelector(state => {
    console.log('jj', state)
    return state
  })
  return (
    <div className='main'>
      <div className='sigdec'>
        <h1 className='wel'>
          Welcome {loguser?.loginArray?.data[0]?.firstname}
        </h1>
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
export default Login
