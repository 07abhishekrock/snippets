import { useFormik } from "formik";
import * as yup from 'yup';
import LogoPageWrapper from "../wrappers/LogoPageWrapper"
import InputGroup from "../util_components/InputGroup";
import '../styles/_forms.scss'

const LoginPage = ()=>{
    const login_form = useFormik({
        initialValues : {
            email : '',
            password : ''
        },
        validationSchema : yup.object({
            email : yup.string().required().email(),
            password : yup.string().required()
        }),
        onSubmit : ({email , password})=>{
            console.log(email , password);
        }
    })
    return (
        <LogoPageWrapper>
            <form className="corner-form" onSubmit={(e)=>{
                e.preventDefault();
                login_form.submitForm();
            }}>
                <h2>Get Started</h2>
                <InputGroup placeholder="xxx@email.com" type="email" form={login_form} name="email" label="Email"/>
                <InputGroup placeholder="your-password" type="password" form={login_form} name="password" label="Password"/>
                <button>Login Now</button>
            </form>
        </LogoPageWrapper>
    )
}

export default LoginPage;