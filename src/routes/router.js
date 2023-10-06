import { BrowserRouter, Routes, Route } from "react-router-dom"
import{
    LoginPage,
    SignupPage,
    PostsPage,
    CommentsPage
} from "../pages"


export const Router = () => {
    return(
        <BrowserRouter>
        
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/signup" element={<SignupPage />}/>
                <Route path="/" element={<PostsPage />}/>
                <Route path="/posts/:id" element={<CommentsPage />}/>
            </Routes>
        </BrowserRouter>
    )
}