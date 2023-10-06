export const goToLoginPage = (navigator) => {
    navigator("/login")
}

export const goToSignupPage = (navigator) => {
    navigator("/signup")
}

export const goToCommentsPage = (navigator,postId) => {
    navigator(`/posts/${postId}`)
}

export const goToPostsPage = (navigator) => {
    navigator("/")
  }