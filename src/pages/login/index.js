import { useForm } from "../../hooks"
import { useState } from "react"
import { useEffect } from "react"
import { validateEmail, validatePassword, BASE_URL, TOKEN_NAME } from "../../constants"
import {
    CenteredPageContainer,
    FormContainer,
    LogoContainer,
    EmailInput,
    PasswordInput
} from "../../components"
import {   
    Button
} from '@chakra-ui/react'
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom"
import { goToPostsPage, goToSignupPage } from "../../routes/coordinator"
import { Login } from "../../constants"

export const LoginPage = () => {
    const navigate = useNavigate()

    const [form, onChangeInputs, clearInputs] = useForm({
        email: "",
        password: ""
    });

    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    
    useEffect(() => {
        const token = window.localStorage.getItem(TOKEN_NAME)
        if (token) {
          goToPostsPage(navigate)
        }
      }, [])
      
    const onSubmit = async (e) => {
        e.preventDefault()
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password))
        try {
            const { token } = isEmailValid && isPasswordValid && await Login({
                email: form.email,
                password: form.password
            }) 
            localStorage.setItem(TOKEN_NAME, token)
            goToPostsPage(navigate)
        } catch (e) {
            console.log(e)
            /* alert(e.response.data) */
        }
       
    } 

    return (
        <CenteredPageContainer>
            <LogoContainer>
                <img src={logo} alt="logo" />
                <h1>O projeto de rede social da Labenu</h1>
            </LogoContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    
                    <EmailInput
                        value={form.email}
                        onChange={onChangeInputs}
                        isValid={isEmailValid}
                    />
                    <PasswordInput
                        value={form.password}
                        onChange={onChangeInputs}
                        isValid={isPasswordValid}
                    />
                    
                    <Button  type="submit" variant="form">Continuar</Button>
                    <Button onClick={() => goToSignupPage(navigate)} type="button" variant="formSecundary">Crie uma conta!</Button>
                    
                </form>
            </FormContainer>
        </CenteredPageContainer>
    )
} 

