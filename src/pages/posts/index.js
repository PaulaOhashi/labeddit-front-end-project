import { useNavigate } from "react-router-dom"
import {
    CenteredPageContainer,
    Header,
    Textarea
} from "../../components"
import {   
    Button
} from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { FormSection, PostsSection } from "../../components/styled-containers"
import { TOKEN_NAME, BASE_URL } from "../../constants"
import axios from "axios"
import { goToLoginPage } from "../../routes/coordinator"
import  PostCard  from "../../components/cards/PostCard"


export const PostsPage = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const [content, setContent] = useState("")

    useEffect(() => {
        const token = window.localStorage.getItem(TOKEN_NAME)
        if (!token) {
          goToLoginPage(navigate)
        } else {
          fetchPosts()
        }
    }, [])
    
    const fetchPosts = () => {
        const axiosConfig = {
            headers: {
                Authorization: window.localStorage.getItem(TOKEN_NAME)
            }
        }

        axios.get(BASE_URL + "/posts", axiosConfig)
            .then(res => {
                setPosts(res.data)
                setContent("")
            })
            .catch(err => console.log(err))
    }
    
    const createPost = (e) => {
        e.preventDefault()
    
        const body = {
          content: content
        }
    
        const axiosConfig = {
          headers: {
            Authorization: window.localStorage.getItem(TOKEN_NAME)
          }
        }
    
        axios.post(BASE_URL + "/posts", body, axiosConfig)
          .then(res => {
            fetchPosts()
          })
          .catch(err => console.log(err))
    }


    return(
        <CenteredPageContainer>
        <Header />

        <FormSection>
            <form onSubmit={createPost}>
                <Textarea
                    placeholder="Escreva seu post..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            <Button  type="submit" variant="form">Postar</Button>
            </form>
        </FormSection>

        <PostsSection>
            {posts.map(post => (
            <PostCard
                post={post}
                fetchUpdate={fetchPosts}
                key={post.id}
            />
            ))}
        </PostsSection>
        </CenteredPageContainer>
    )
}