import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Logo from '../../../Assets/Logo.png';

import "./styles.scss";

export function Register() {
    const formik = useFormik({
        initialValues: {
            full_name: '',
            user_name: '',
            email: '',
            password: '',
            confirm_password: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    })
    return (
        <div className="d-flex">
            <div className="w-50 d-flex align-items-center justify-content-center flex-column h-100vh image">
                <div className="backdrop-blur p-4">
                    <div className="mx-5">
                        <img src={Logo} alt="Logo do marketzoom" /> 
                    </div>
                    <Form onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
                        <div>
                            <label>Nome completo</label>
                            <input type="text" className="input-border-purple" />
                        </div>
                        <div>
                            <label>Nome de usuário</label>
                            <input type="text" className="input-border-purple" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" className="input-border-purple" />
                        </div>
                        <div>
                            <label>Senha</label>
                            <input type="password" className="input-border-purple" />
                        </div>
                        <div>
                            <label>Confirme sua senha</label>
                            <input type="password" className="input-border-purple" />
                        </div>
                        <button className="btn btn-bg-purple-text-white w-100">Criar</button>
                        <span>Já tem uma conta? <a href="/login">Realize o login</a></span>
                    </Form>
                </div>
            </div>

            <div className="w-50 image-man" />
        </div>
    )
}