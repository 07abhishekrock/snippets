import { useFormik } from "formik";
import * as yup from 'yup';
import LogoPageWrapper from "../wrappers/LogoPageWrapper"
import InputGroup from "../util_components/InputGroup";
import '../styles/_forms.scss'

const SignupPage = ()=>{
    const signup_form = useFormik({
        initialValues : {
            email : '',
            name : '',
            password : '',
            confirmPassword : ''
        },
        validationSchema : yup.object({
            email : yup.string().required().email(),
            name : yup.string().required(),
            password : yup.string().required(),
            confirmPassword : yup.string().oneOf([yup.ref('password') , null] , 'Passwords do not match').required()
        }),
        onSubmit : ({email , password , name})=>{
            console.log(email , password , name);
        }
    })
    return (
        <LogoPageWrapper>
            <form className="corner-form" onSubmit={(e)=>{
                e.preventDefault();
                signup_form.submitForm();
            }}>
                <h2>New Member</h2>
                <InputGroup placeholder="John Doe" type="text" form={signup_form} name="name" label="Name"/>
                <InputGroup placeholder="xxx@email.com" type="text" form={signup_form} name="email" label="Email"/>
                <InputGroup placeholder="your-password" type="password" form={signup_form} name="password" label="Password"/>
                <InputGroup placeholder="Re-enter" type="password" form={signup_form} name="confirmPassword" label="Confirm Password"/>
                <button>Create Account</button>
            </form>
        </LogoPageWrapper>
    )
}

export default SignupPage;