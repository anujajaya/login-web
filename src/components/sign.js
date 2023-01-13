import './sign.css'
import {
  Form,
  Input,
  Typography,
  Button,
  Divider,
  message,
  Checkbox,
  Modal
} from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Axios } from 'axios'
function Sign () {
  let navigate = useNavigate()
  const [signuppage, setSighuppge] = useState(false)

  const [emailAddressreg,setEmailAddressreg]=useState("");
  const [passwordreg,setPasswordreg]=useState("");
    const [userNamereg,setUserNamereg]=useState("")
    const [firstNAme,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
  message.success('login')
  const loged = values => {
    console.log(values)
    let {myfirstname} = values
    navigate("/signup",{state:{myfirstname}})
  }
  const register=()=>{
    Axios.post('http://localhost',{
      userName:userNamereg,
      password:passwordreg,
      emailAddress:emailAddressreg
    }).then((response)=>{
      console.log(response)
    })
  }
  
  return (
    <div>
      <div>
        <Button
          className='sigh'
          onClick={() => {
            setSighuppge(true)
          }}
        >
          Signup
        </Button>
        <Modal
          title='create user'
          visible={signuppage}
          footer={null}
          onCancel={() => {
            setSighuppge(false)
          }}
        >
          <Form
            name='login'
            onFinish={loged}
            autoComplete='off'
            className='loginForm'
          >
            <Typography.Title>Welcome!</Typography.Title>
            <Form.Item
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'please enter valid email'
                }
              ]}
              label='Email'
              name={'myemail'}
            >
              <Input placeholder='Enter your email address'  onChange={(e)=>{setEmailAddressreg(e.target.value)}} />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'please enter your First name'
                }
              ]}
              label='Firstname'
              name={'myfirstname'}
            >
              <Input placeholder='Enter your firstname' />
            </Form.Item><Form.Item
              rules={[
                {
                  required: true,
                  message: 'please enter your last name'
                }
              ]}
              label='lastname'
              name={'mylastname'}
            >
              <Input placeholder='Enter your last name' />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'please enter your username'
                }
              ]}
              label='Username'
              name={'myusername'}
            >
              <Input placeholder='Enter your username' onChange={(e)=>{setUserNamereg(e.target.value)}} />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'please enter your password'
                }
              ]}
              label='Password'
              name={'mypassword'}
            >
              <Input.Password placeholder='Enter your password' onChange={(e)=>{setPasswordreg(e.target.value)}} />
            </Form.Item>
            <Form.Item
              name='remember'
              valuePropName='checked'
              // wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Button onClick={register()} type='primary' htmlType='submit' block>
              Signup
            </Button>
            <Divider
              style={{
                borderColor: 'black'
              }}
            >
              {' '}
              or Signup with
            </Divider>
            {/* <div className='socialloin'>
          <div>
            // <img className='google' src=" https://www.google.com/" src="data:image/png;base64,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"/>
          </div>
          <div>
            // <img className='google'  src=" data:image/png;base64,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"/>
          </div>
        </div> */}
          </Form>
        </Modal>
      </div>
    </div>
  )
}

export default Sign;
