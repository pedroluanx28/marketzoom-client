import { useEffect } from 'react';
import { useFormik } from 'formik'
import { FormInput } from '@/Components/FormInput';
import { Link } from 'react-router-dom'
import * as Yup from "yup"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Logo from '@public/Logo.svg';
import axios from 'axios';
import { useAuth } from '@/hooks/useAuth';

import './style.scss'

const validation = Yup.object().shape({
    email: Yup.string().required('Campo obrigatório*'),
    password: Yup.string().required('Campo obrigatório*')
})

export function Login() {
    const { api } = useAuth();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validation,
        onSubmit: async (values) => {
            try {
                const { data } = await api.post("/auth/login", values);

                localStorage.setItem("token", data.token)
            } catch (error) {
                console.error(error);
            }
        }
    })

    useEffect(() => {
        async function getToken() {
            try {
                const data = await axios.get('http://127.0.0.1:8001/sanctum/csrf-cookie');
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
        getToken();
    }, [])
    return (
        <div className='login-container d-flex'>
            <div className='w-50 h-100 d-flex justify-content-center align-items-center'>
                <Form className='d-flex flex-column gap-3 px-5 py-3 rounded rounded-4 backdrop-blur' onChange={formik.handleChange} onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col>
                            <a href="/">
                                <img src={Logo} alt="logomarketzoom" />
                            </a>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='d-flex flex-column'>
                            <FormInput labelClassName='fw-bolder' label='Nome de usuário:' type='text' name='email' id='email' />
                            {formik.errors.email && (
                                <div className='text-danger'>{formik.errors.email}</div>
                            )}
                        </Col>
                    </Row>

                    <Row>
                        <Col className='d-flex flex-column'>
                            <FormInput labelClassName='fw-bolder' label='Senha:' type='password' name='password' id='userpassword' />
                            {formik.errors.password && (
                                <div className='text-danger'>{formik.errors.password}</div>
                            )}
                        </Col>
                    </Row>

                    <Row>
                        <Col className='d-flex flex-column'>
                            <button className='btn w-100 btn-bg-purple-text-white' type='submit'>Login</button>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='text-center'>
                            <span className="fw-600">Não tem uma conta? <Link className="purple-link" to={'/auth/register'}>Cadastre-se</Link></span>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div></div>
        </div>
    )
}

