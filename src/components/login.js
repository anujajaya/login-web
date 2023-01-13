import './login.css'
import Head from './head'
import {useLocation} from 'react-router-dom'
const Login = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <h1>Welcome {location?.state?.myusername}</h1>
    </div>
  );
};
export default Login;
