import React, { useState, useContext } from "react";

import { UserProfileContext } from "./UserProfileProvider";
export const PostContext = React.createContext();
export const PostProvider = (props) => {

    const apiUrl = "/api/post";
    const { getToken } = useContext(UserProfileContext);

    const [posts, setPosts] = useState([]);

    const getAllPosts = () =>
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setPosts));

    const addPost = (post) =>
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error("Unauthorized");
            }));

    const getPost = (id) => {
        getToken().then((token) =>
            fetch(`/api/post/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }))
            .then((res) => res.json())
    }

    const getAllUserPosts = (userProfileId) =>
        getToken().then((token) =>
            fetch(`apiUrl/getbyuser/${userProfileId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json()));

    const searchPosts = (searchTerm) => {
        getToken().then((token) =>
            fetch(`api/post/search?q=${searchTerm}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((res) => res.json())
                .then(setPosts));
    };



    return (
        <PostContext.Provider value={{ posts, getAllPosts, addPost, getPost, getAllUserPosts, searchPosts }}>
            {props.children}
        </PostContext.Provider>
    );
}

//     const getAllPosts = () => {
//         return fetch("/api/post")
//             .then((res) => res.json())
//             .then(setPosts);
//     };

//     const getPost = (id) => {
//         return fetch(`/api/post/${id}`).then((res) => res.json());
//     };

//     const addPost = (post) => {
//         return fetch("/api/post", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(post),
//         }).then(getAllPosts);
//     };

//     const getAllUserPosts = userProfileId => {
//         return fetch(`/api/post/getbyuser/${userProfileId}`)
//             .then((res) => res.json())
//     };

//     const searchPosts = searchTerms => {
//         return fetch(`/api/post/search?q=${searchTerms}&sortDesc=true`)
//             .then((res) => res.json())
//             .then(setPosts)
//     }

//     return (
//         <PostContext.Provider value={{ posts, getAllPosts, addPost, getAllUserPosts, getPost, searchPosts }}>
//             {props.children}
//         </PostContext.Provider>
//     );
// };