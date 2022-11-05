import {LockOutlined, UserOutlined} from '@ant-design/icons';
import React from "react";
import {Button, Checkbox, Form, Input} from 'antd';
import {useForm} from "react-hook-form";
import './Login.css';
import {NavLink} from "react-router-dom";

const Login = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className="login">
            <h1>Login</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                {/*
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>
*/}
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn login-form-button">
                        Log in
                    </Button>
                    <NavLink to='/sign-up'>
                        <Button type='primary' className="btn">Sign Up</Button>
                    </NavLink>
                </Form.Item>
            </Form>
        </div>
    );

};

export default Login;