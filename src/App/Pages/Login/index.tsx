import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from "yup"
import { Button, Form } from 'react-bootstrap'
// import { useLocation } from 'react-router-dom';

import imageLogo from "../../../Assets/Logo.png"//deve ser alterado o caminho

import './style.scss'
import Swal from 'sweetalert2'

const validation = Yup.object().shape({
    username: Yup.string().required('Campo obrigatório*'),
    password: Yup.string().required('Campo obrigatório*')
})

export function Login() {
    // const localizacao = useLocation();
    const formik = useFormik({
        initialValues:{
            username: '',
            password: ''
        },
        validationSchema: validation,
        onSubmit: (values) =>{
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
                    <section>
                        <img src={imageLogo} alt="logomarketzoom" />
                    </section>
                    <section className='d-flex flex-column gap-1'>
                        <label htmlFor="username">Nome de usuário:</label>
                        <input type='text' name='username' placeholder='Seu nome de usuário' id='username' />
                        {formik.errors.username && (
                            <div className='text-danger'>{formik.errors.username}</div>
                        )}
                    </section>
                    <section className='d-flex flex-column gap-1'>
                        <label htmlFor="userpassword">Senha:</label>
                        <input type='password' name='password' placeholder='************' id='userpassword' />
                        {formik.errors.password && (
                            <div className='text-danger'>{formik.errors.password}</div>
                        )}
                    </section>
                    <section>
                        <Button className='w-100' type='submit'>Login</Button>
                    </section>
                    <section>
                        Não tem uma conta?<Link to={'/cadastro'}>Cadastre-se</Link>
                    </section>
                </Form>
            </div>
            <div></div>
        </div>
    )
}

