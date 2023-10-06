import axios from "axios"
import { goToCommentsPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { BASE_URL, TOKEN_NAME } from "../../constants"
import { CardContainer, CardFooter } from "../styled-containers"
import  vector1  from "../../assets/Vector1.png"
import  vector2  from "../../assets/Vector2.png"
import  vector3  from "../../assets/Vector3.png"

export default function PostCard(props) {
    const navigate = useNavigate()

    const { post, fetchUpdate } = props

    const {
        id,
        creator,
        content,
        votesCount,
        commentsCount
      } = post

    const votePost = (e, vote) => {
        e.stopPropagation()
    
        const body = {
          postId: id,
          vote: vote
        }

        const axiosConfig = {
            headers: {
              Authorization: window.localStorage.getItem(TOKEN_NAME)
            }
        }
      
        axios.put(BASE_URL + `/posts/${id}/likes`, body, axiosConfig)
            .then(res => {
              fetchUpdate()
            })
            .catch(err => console.log(err))
    }

    return(
        <CardContainer onClick={() => goToCommentsPage(navigate, id)}>
            <p>Enviado por: {creator.name}</p>
            <h1>{content}</h1>
            <CardFooter>
                <vote-info>
                    <button onClick={(e) => votePost(e, true)}>
                        <img src={vector1} alt="curtir" />
                    </button>
                    <span>{votesCount}</span>
                    <button onClick={(e) => votePost(e, false)}>
                        <img src={vector2} alt="descurtir" />
                    </button>
                </vote-info>
                <comment-info>
                    <img src={vector3} alt="curtir" />
                    <span>{commentsCount}</span>
                </comment-info>
            </CardFooter>
        </CardContainer>
        
    )
}