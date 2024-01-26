import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import { FormInput } from "@/Components/FormInput";

import Logo from '@public/Logo.svg';

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
                            <FormInput label="Nome Completo" type="text" />
                        </div>
                        <div>
                            <FormInput label="Nome de usuário" type="text" />
                        </div>
                        <div>
                            <FormInput label="Email" type="text" />
                        </div>
                        <div>
                            <FormInput label="Senha" type="password" />
                        </div>
                        <div>
                            <FormInput label="Confirme sua senha" type="password" />
                        </div>
                        <button className="btn btn-bg-purple-text-white mt-3 mb-2 w-100">Criar</button>
                        <div className="text-center">
                        <span>Já tem uma conta? <a href="/auth/login" className="purple-link">Realize o login</a></span>
                        </div>
                    </Form>
                </div>
            </div>

            <div className="w-50 image-man" />
        </div>
    )
}