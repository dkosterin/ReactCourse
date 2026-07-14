const URL = "https://json-placeholder.mock.beeceptor.com/posts";

export const fetchPosts = async () => {
    const response = await fetch(URL)
    
    if(!response.ok)
        throw new Error("Error");

    return response.json();
}

export const createPost = async postData => {
    const response = await fetch(URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(postData)
    });

    if(!response.ok)
        throw new Error("Error");

    return response.json();
}

export const deletePost = async id => {
    const response = await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });

    return id;
}