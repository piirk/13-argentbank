import { useDispatch } from 'react-redux'
import { AppDispatch } from '@redux/store'
import { login } from '../redux/authActions'
import { Form, Input, Checkbox, Button, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface LoginFormValues {
  email: string
  password: string
  remember: boolean
}

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage()
  const [loading, setLoading] = useState(false)
  const key = 'loginMessage'

  const onFinish = async (values: LoginFormValues) => {
    setLoading(true)
    try {
      const userData = {
        email: values.email,
        password: values.password,
      }
      const actionResult = await dispatch(login(userData))

      if (login.fulfilled.match(actionResult)) {
        navigate('/profile')
      } else {
        messageApi.open({
          key,
          type: 'error',
          content: actionResult.payload as string,
        })
      }
    } catch (error) {
      messageApi.open({
        key,
        type: 'error',
        content: 'An error occurred. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      {contextHolder}
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
          <Input placeholder="Enter your email" disabled={loading} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            placeholder="Enter your password"
            disabled={loading}
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox disabled={loading}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            style={{ fontWeight: 'bold' }}
            size="large"
            loading={loading}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default LoginForm
