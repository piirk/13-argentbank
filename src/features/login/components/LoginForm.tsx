import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@redux/store'
import { login } from '@redux/actions/authActions'
import { Form, Input, Checkbox, Button, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { CheckboxChangeEvent } from 'antd/es/checkbox'

interface LoginFormValues {
  email: string
  password: string
  remember: boolean
}

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [rememberMe, setRememberMe] = useState(true)
  const [messageApi, contextHolder] = message.useMessage()
  const [loading, setLoading] = useState(false)
  const token = useSelector((state: RootState) => state.auth.token)

  // Redirect to profile page if user is already logged in
  useEffect(() => {
    if (token) {
      navigate('/profile')
    }
  }, [token, navigate])

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail')
    if (savedEmail) {
      form.setFieldsValue({ email: savedEmail })
      setRememberMe(true)
    }
  }, [form])

  const onFinish = async (values: LoginFormValues) => {
    setLoading(true)
    try {
      const userData = {
        email: values.email,
        password: values.password,
      }
      const actionResult = await dispatch(login(userData))

      if (rememberMe) {
        localStorage.setItem('rememberedEmail', values.email)
      } else {
        localStorage.removeItem('rememberedEmail')
      }

      if (!login.fulfilled.match(actionResult)) {
        messageApi.error(actionResult.error.message as string)
      }
    } catch (error) {
      console.error('An error occurred:', error)
      messageApi.error('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const handleRememberMe = (e: CheckboxChangeEvent) => {
    setRememberMe(e.target.checked)
  }

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        requiredMark={false}
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
          <Checkbox
            checked={rememberMe}
            onChange={handleRememberMe}
            disabled={loading}
          >
            Remember me
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit" loading={loading}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default LoginForm
