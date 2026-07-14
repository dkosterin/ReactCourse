import { fetchPosts } from "../api/posts";
import PostItem from "./PostItem";
import { useQuery } from "@tanstack/react-query";

function PostList() {
    const {data, isLoading, isError, error, isFetching} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts
    });

    if (isLoading)
        return <div>Loading...</div>

    if (isError)
        return <div>Error: {error.message}</div>

    return (
        <>
            {data.map(post => <PostItem key={post.id} post={post} />)}
        </>
    )
}

export default PostList;