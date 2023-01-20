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
import axios from 'axios'
import {Link} from 'react-router-dom'
function Sign () {
  const [form]=Form.useForm()
  let navigate = useNavigate()
  const [signuppage, setSighuppge] = useState(false)

 
  // message.success('login')
  const loged = values => {
    console.log(values)
    let { myfirstname } = values
    // navigate("/signup",{state:{myfirstname}})
  }
  const signin = values => {
    axios
      .post('http://localhost:3000/api/v1/singup/create', { ...values })
      .then(response => {
        console.log(response)
        let { firstname } = values
         navigate("/login",{state:{firstname}})

      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <div className='App'>
        <div className='para'>
        <h1>Welcome Dears </h1>
        <h2>Do you have an Account  </h2>
        <h2>Signup!!!..</h2>
        </div>
        <Button
          className='sigh'
          onClick={() => {
            setSighuppge(true)
          }}
        >
          Signup
        </Button>
        <Modal
          title='sign up'
          visible={signuppage}
          footer={null}
          onCancel={() => {
            setSighuppge(false)
          }}
          afterClose={()=>{form.resetFields()}}
        >
          <Form
          form={form}
            name='login'
            onFinish={signin}
            autoComplete='off'
            className='logForm'
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
              name={'email'}
            >
              <Input style={{marginLeft:"20px"}}
                placeholder='Enter your email address'
                
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'please enter your First name'
                }
              ]}
              label='Firstname'
              name={'firstname'}
            >
              <Input
                placeholder='Enter your firstname'
                
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'please enter your last name'
                }
              ]}
              label='lastname'
              name={'lastname'}
            >
              <Input
                placeholder='Enter your last name'
                
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'please enter your username'
                }
              ]}
              label='Username'
              name={'username'}
            >
              <Input
                placeholder='Enter your username'
               
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'please enter your password'
                }
              ]}
              label='Password'
              name={'password'}
            >
              <Input.Password
                placeholder='Enter your password'
               
              />
            </Form.Item>
            <Form.Item
              name='remember'
              valuePropName='checked'
              // wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Button type='primary' htmlType='submit' block>
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
            <div className='socialloin'>
          <div>
          </div>
          <div>
          </div>
        </div>
          </Form>
        </Modal>
        <div className='paraga'>
        <p >Alredy have an account please <Link className='li' to="/login">Login</Link>
</p>
        </div>
      </div>
    
    </div>
  )
}

export default Sign
