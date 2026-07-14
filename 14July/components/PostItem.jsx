function PostItem({post}) {
    return (
        <>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </>
    )
}

export default PostItem;