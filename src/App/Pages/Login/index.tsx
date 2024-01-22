import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import * as Yup from "yup"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import imageLogo from "../../../Assets/Logo.png"//deve ser alterado o caminho

import './style.scss'

const validation = Yup.object().shape({
    username: Yup.string().required('Campo obrigatório*'),
    password: Yup.string().required('Campo obrigatório*')
})

export function Login() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: validation,
        onSubmit: (values) => {
            Swal.fire({
                icon: 'info',
                text: 'Parabens'
            })
            alert(JSON.stringify(values))
        }
    })
    return (
        <div className='login-container d-flex'>
            <div className='w-50 h-100 d-flex justify-content-center align-items-center'>
                <Form className='d-flex flex-column gap-3 px-5 py-3 rounded rounded-4 background-filter' onChange={formik.handleChange} onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col>
                            <img src={imageLogo} alt="logomarketzoom" />
                        </Col>
                    </Row>

                    <Row>
                        <Col className='d-flex flex-column'>
                            <label htmlFor="username">Nome de usuário:</label>

                            <input className='form-control' type='text' name='username' placeholder='Seu nome de usuário' id='username' />
                            {formik.errors.username && (
                                <div className='text-danger'>{formik.errors.username}</div>
                            )}
                        </Col>
                    </Row>

                    <Row>
                        <Col className='d-flex flex-column'>
                            <label htmlFor="userpassword">Senha:</label>

                            <input className='form-control' type='password' name='password' placeholder='************' id='userpassword' />
                            {formik.errors.password && (
                                <div className='text-danger'>{formik.errors.password}</div>
                            )}
                        </Col>
                    </Row>

                    <Row>
                        <Col className='d-flex flex-column'>
                            <Button className='w-100' type='submit'>Login</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='text-center'>
                            Não tem uma conta?<Link to={'/cadastro'}>Cadastre-se</Link>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div></div>
        </div>
    )
}

