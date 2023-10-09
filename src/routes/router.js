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
                <Route path="/" element={<LoginPage />}/>
                <Route path="/signup" element={<SignupPage />}/>
                <Route path="/posts" element={<PostsPage />}/>
                <Route path="/comments/:id" element={<CommentsPage />}/>
            </Routes>
        </BrowserRouter>
    )
}