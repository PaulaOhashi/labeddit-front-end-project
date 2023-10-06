import { HeaderStyled, CloseIcon, LogoImage, LogoutButton } from "./styled"
import { goToPostsPage, goToLoginPage} from "../../routes/coordinator"
import { useLocation, useNavigate } from "react-router-dom"
import logo_pequeno from "../../assets/logo_pequeno.png"
import { TOKEN_NAME } from "../../constants"
import  close  from "../../assets/close.png"


export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const deslogar = () => {
        window.localStorage.removeItem(TOKEN_NAME)
        goToLoginPage(navigate)
    }

    const renderButtons = () => {
        switch (location.pathname) {
            case "/signup":
                return <button onClick={() => goToLoginPage(navigate)}>Entrar</button>

            case "/":
                return <button onClick={deslogar}>Logout</button>

            default:
                return (
                    <>
                        <button onClick={() => goToPostsPage(navigate)}>
                            <CloseIcon src={close} alt="voltar"/>
                        </button>

                        <LogoutButton onClick={deslogar}>Logout</LogoutButton>
                    </>
                )
        }
    }

    return(
        <HeaderStyled>
            <LogoImage src={logo_pequeno} alt="logo" />
            {renderButtons()}
            
        </HeaderStyled>
    )
}