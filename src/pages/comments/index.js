import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL,TOKEN_NAME } from "../../constants"
import { goToLoginPage } from "../../routes/coordinator"
import { useNavigate, useParams } from "react-router-dom"
import { Header } from "../../components"
import PostCard from "../../components/cards/PostCard"
import CommentCard from "../../components/cards/CommentCard"
import { CenteredPageContainer } from "../../components"
import { FormSection, PostsSection, CommentsSection, Textarea } from "../../components/styled-containers"
import {   
    Button
} from '@chakra-ui/react'

export const CommentsPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const [content, setContent] = useState("")

    useEffect(() => {
        const token = window.localStorage.getItem(TOKEN_NAME)
        if (!token) {
          goToLoginPage(navigate)
        } else {
          fetchPost()
          fetchComments()
        }
      }, [])

    const fetchPost = () => {
         const axiosConfig = {
          headers: {
            Authorization: window.localStorage.getItem(TOKEN_NAME)
          }
        }
    
        axios.get(BASE_URL + `/posts/${params.id}`, axiosConfig)
          .then(res => {
            setPost(res.data)
            console.log(post)
          })
          .catch(err => console.log(err)) 
    }

    const fetchComments = () => {
        const axiosConfig = {
          headers: {
            Authorization: window.localStorage.getItem(TOKEN_NAME)
          }
        }
    
        axios.get(BASE_URL + `/comments/${params.id}`, axiosConfig)
          .then(res => {
            setComments(res.data)
          })
          .catch(err => console.log(err))
      }
    
      const createComment = (e) => {
        e.preventDefault()
    
        const body = {
          content: content
        }
        
        const axiosConfig = {
          headers: {
            Authorization: window.localStorage.getItem(TOKEN_NAME)
          }
        }
    
        axios.post(BASE_URL + `/comments/${params.id}`, body, axiosConfig)
          .then(res => {
            fetchPost()
            fetchComments()
            setContent("")
          })
          .catch(err => console.log(err))
      }
    console.log(post)
    
    return(
        <CenteredPageContainer>
            <Header />
            <PostsSection>
                {post && <PostCard post={post} fetchUpdate={fetchPost} />} 
            </PostsSection>

            <FormSection>
                <form onSubmit={createComment}>
                <Textarea
                    placeholder="Adicionar comentário"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <Button  type="submit" variant="form">Responder</Button>
                </form>
            </FormSection>

            <CommentsSection>
                {comments.map(comment => (
                <CommentCard
                    comment={comment}
                    fetchComments={fetchComments}
                    key={comment.id}
                />
            ))}
        </CommentsSection>            
        </CenteredPageContainer>
    )
}