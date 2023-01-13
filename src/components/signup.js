import './login.css'
import Sign from './sign';
import {useLocation} from 'react-router-dom'
const Signup = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <h1>Welcome {location?.state?.myfirstname}</h1>
    </div>
  );
};
export default Signup;
