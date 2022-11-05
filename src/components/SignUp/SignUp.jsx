import {LockOutlined, UserOutlined, MailOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input} from 'antd';
import React from "react";
import './SignUp.css';
import {NavLink} from "react-router-dom";

const SignUp = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className="sign-up">
            <h1>Регистрация</h1>
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
                            message: 'Пожалуйста, введите имя!',
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

                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, подтвердите пароль!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Пароли должны совпадать!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Подтвердите пароль"/>
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'Пожалуйста, ведите правильный адрес!',
                        },
                        {
                            required: true,
                            message: 'Пожалуйста, введите адрес почты!',
                        },
                    ]}
                >
                    <Input
                        prefix={<MailOutlined className="site-form-item-icon"/>}
                        type="email"
                        placeholder="Почтовый адрес"/>
                </Form.Item>




                <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn login-form-button">
                        Зарегистрироваться
                    </Button>
                    <NavLink to='/'>
                        <Button type='link' className="btn">Войти</Button>
                    </NavLink>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SignUp;
