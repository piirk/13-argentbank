import { useDispatch } from 'react-redux'
import { AppDispatch } from '@redux/store'
import { login } from '../redux/authActions'
import { Form, Input, Checkbox, Button } from 'antd'

interface LoginFormValues {
  email: string
  password: string
  remember: boolean
}

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>()

  const onFinish = (values: LoginFormValues) => {
    const userData = {
      email: values.email,
      password: values.password,
    }
    dispatch(login(userData)) // Action de login
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email!' },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
          style={{ fontWeight: 'bold' }}
          size="large"
        >
          Sign In
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
