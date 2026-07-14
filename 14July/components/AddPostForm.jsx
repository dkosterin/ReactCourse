import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../api/posts";

function AddPostForm() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createPost,
        onMutate: async newPost => { // То, что происходит во время изменения
            await queryClient.cancelQueries(["posts"]);
            const previousPosts = queryClient.getQueryData(["posts"]);

            const optimisticId = Date.now();
            const optimisticPost = {...newPost, id: optimisticId};

            queryClient.setQueryData(["posts"], old => [...old, optimisticPost]);

            return { previousPosts, optimisticId }
        },
        onError: (err, newPost, context) => {
            console.log("HI");
            queryClient.setQueryData(["posts"], context.previousPosts);
        },
        onSuccess: (savedPost, newPost, context) => {
            
            console.log(savedPost);
            console.log(newPost);

            queryClient.setQueryData(["posts"], old => (
                old.map(post => post.id === context.optimisticId ?
                    savedPost : post
                )
            ))
        },
        onSettled: () => {
        }
    })

    function handleSubmit(e) {
        e.preventDefault();

        mutation.mutate({
            title, 
            body, 
            userId: 1,
            link: "https://example.com/article2",
            comment_count: 12
        },
        {
            onSuccess: () => {
                setTitle("");
                setBody("");
            }
        }
    )
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add new post</h2>
            <input type="text" value={title} 
                onChange={e => setTitle(e.target.value)} />
            <div>
                <textarea value={body} 
                onChange={e => setBody(e.target.value)} />
            </div>
            <div>
                <button type="submit">Create new post</button>
            </div>
            
        </form>
    )
}

export default AddPostForm;