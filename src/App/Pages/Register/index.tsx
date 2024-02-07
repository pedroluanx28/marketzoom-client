import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import { FormInput } from "@/Components/FormInput";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

import Logo from '@public/Logo.svg';

import "./styles.scss";

export function Register() {
    const { api } = useAuth();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            email: '',
            password: '',
            confirm_password: '',
        },
        onSubmit: async (values) => {
            if (values.password != values.confirm_password) {
                alert("tudo errado");
                return;
            }

            try {
                await api.post("/users", {
                    name: values.name,
                    username: values.username,
                    email: values.email,
                    password: values.password,
                });

                navigate("/auth/login");
            } catch (error) {
                console.error(error);
            }
        }
    })
    return (
        <div className="d-flex">
            <div className="w-50 d-flex align-items-center justify-content-center flex-column h-100vh">
                <div className="backdrop-blur py-4 px-5">
                    <div className="mx-5">
                        <a href="/">
                            <img src={Logo} alt="logomarketzoom" />
                        </a>                    </div>
                    <Form onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
                        <div>
                            <FormInput name="name" labelClassName="fw-bold" label="Nome Completo" type="text" />
                        </div>
                        <div>
                            <FormInput name="username" labelClassName="fw-bold" label="Nome de usuário" type="text" />
                        </div>
                        <div>
                            <FormInput name="email" labelClassName="fw-bold" label="Email" type="text" />
                        </div>
                        <div>
                            <FormInput name="password" labelClassName="fw-bold" label="Senha" type="password" />
                        </div>
                        <div>
                            <FormInput name="confirm_password" labelClassName="fw-bold" label="Confirme sua senha" type="password" />
                        </div>
                        <button className="btn btn-bg-purple-text-white mt-3 mb-2 w-100">Criar</button>
                        <div className="text-center">
                            <span className="fw-600">Já tem uma conta? <a href="/auth/login" className="purple-link">Realize o login</a></span>
                        </div>
                    </Form>
                </div>
            </div>

            <div className="w-50 image-man" />
        </div>
    )
}

