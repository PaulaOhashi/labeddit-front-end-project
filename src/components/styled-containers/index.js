import styled from "styled-components"

export const CenteredPageContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color:white;
`;

export const FormContainer = styled.div`
    min-width:40vw;
    max-width:95vw;
    flex-direction:column;
    justify-content: space-between;
    border-radius:10px;
    padding:10px;
    align-items:center;
    input,p {
        margin-bottom:10px
    }
`;

export const ButtonContainer = styled.button`
    display:flex;
    flex-direction:column;
    gap:10px;
    width:100%;
`

export const LogoContainer = styled.div`
    display:flex;
    flex-direction: column;
    padding-bottom:40px;
    font-size:16px;
`

export const LogoSignupContainer = styled.div`
    display:flex;
    flex-direction: column;
    padding-bottom:40px;
    font-size:33px;
`

export const Textarea = styled.textarea`
    background-color: #EDEDED;
    color: #323941;
    width: 100%;
    max-width: 365px;
    height: 130px;
    margin: 0.5rem 0;
    padding: 10px;
    font-size: 18px;
    border: none;
    resize: none;
    border-radius:5px;
`
export const CardContainer = styled.article`
  background-color: #FBFBFB;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 0.5rem;
  margin-top: 1rem;
  width: 365px;
  h1 {
    font-size: 18px;
    font-weight: 400;
    padding: 1rem 0;
  }

  p {
    color: #6F6F6F;
    font-size: 12px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
`

export const CardFooter = styled.footer`
  display: flex;
  color: #6F6F6F;

  button {
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  vote-info {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
  }

  comment-info {
    margin-left: 24px;
    display: flex;
    align-items: center;
    
    span {
      margin-left: 1rem;
    }
  }
`

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  button {
    width: 100%;
    max-width: 365px;
    height: 51px;
    border-radius: 15px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    border: none;
  }
`

export const PostsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`

export const CommentsSection = styled.section`
   display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`



