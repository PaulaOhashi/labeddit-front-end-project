import axios from "axios"
import { BASE_URL,TOKEN_NAME } from "../../constants"
import  vector1  from "../../assets/Vector1.png"
import  vector2  from "../../assets/Vector2.png"
import { CardContainer, CardFooter } from "../../components/styled-containers"

export default function CommentCard(props) {
    const { comment, fetchComments } = props

    const {
        id,
        postId,
        creator,
        content,
        votesCount
      } = comment

    const voteComment = (e, vote) => {
        e.stopPropagation()
    
        const body = {
          commentId: id,
          vote: vote
        }
    
        const axiosConfig = {
          headers: {
            Authorization: window.localStorage.getItem(TOKEN_NAME)
          }
        }
    
        axios.put(BASE_URL + `/comments/${id}/like`, body, axiosConfig)
          .then(res => {
            fetchComments()
          })
          .catch(err => console.log(err))
      }

    return(
        <CardContainer>
             <p>Enviado por: {creator.name}</p>
             <h1>{content}</h1>

             <CardFooter>
                <vote-info>
                    <button onClick={(e) => voteComment(e, true)}>
                        <img src={vector1} alt="curtir" />
                    </button>
                    <span>{votesCount}</span>
                    <button onClick={(e) => voteComment(e, false)}>
                        <img src={vector2} alt="descurtir" />
                    </button>
                </vote-info>
             </CardFooter>
        </CardContainer>
    )
}