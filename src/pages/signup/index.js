import { useForm } from "../../hooks"
import { useState } from "react"
import { useEffect } from "react"
import { Signup, validateEmail, validateName, validatePassword, TOKEN_NAME } from "../../constants"
import {
    CenteredPageContainer,
    FormContainer,
    LogoSignupContainer,
    EmailInput,
    PasswordInput,
    NameInput
} from "../../components"
import {   
    Button
} from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import { goToPostsPage } from "../../routes/coordinator"
import { Header } from "../../components"


export const SignupPage = () => {
    const navigate = useNavigate()
    
    const [form, onChangeInputs, clearInputs] = useForm({
        name: "",
        email: "",
        password: ""
    });

    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isNameValid, setIsNameValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)

    useEffect(() => {
        const token = window.localStorage.getItem(TOKEN_NAME)
        if (token) {
          goToPostsPage(navigate)
        }
      }, [])

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        setIsEmailValid(validateEmail(form.email))
        setIsNameValid(validateName(form.name))
        setIsPasswordValid(validatePassword(form.password))
        try {
            const { token } = isNameValid && isEmailValid && isPasswordValid && await Signup({
                email: form.email,
                password: form.password,
                name: form.name
            }) 
            localStorage.setItem(TOKEN_NAME, token)
            goToPostsPage(navigate)
        } catch (e) {
            console.log(e)
        }
    } 

    return (
        <CenteredPageContainer>
            <Header />
            <LogoSignupContainer>
                <h1>Olá, boas vindas ao LabEddit ;)</h1>
            </LogoSignupContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <NameInput 
                        value={form.name}
                        onChange={onChangeInputs}
                        isValid={isNameValid}
                    />
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
                    
                        <Button /* onClick={() => goToFeedPage(navigate)} */ type="submit" variant="form">Cadastrar</Button>
                    
                </form>
            </FormContainer>
            <h1>Ao continuar, você concorda com o nosso Contrato de Usuário e nossa Política de Privacidade</h1>
            <Checkbox defaultChecked>Eu concordo em receber emails sobre coisas legais no Labeddit</Checkbox>
        </CenteredPageContainer>
    )
}