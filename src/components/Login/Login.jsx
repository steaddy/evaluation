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
            <h1>Вход</h1>
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
                            message: 'Пожалуйста, введите имя пользователя!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Имя пользователя"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите пароль!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Пароль"
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
                        Войти
                    </Button>
                    <NavLink to='/sign-up'>
                        <Button type='link' className="btn">Зарегистрироватьcя</Button>
                    </NavLink>
                </Form.Item>
            </Form>







        </div>
    );

};

export default Login;