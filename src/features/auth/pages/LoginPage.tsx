import React, { useState } from 'react'
import Layout from '../../../common/components/Layout'
import { Form, Input, Button, Checkbox } from 'antd'

const LoginPage = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Layout mainClassName="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical" // Pour aligner les labels au-dessus des inputs
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Enter your username" />
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
            <Button block type="primary" htmlType="submit" color="green">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </section>
    </Layout>
  )
}

export default LoginPage
