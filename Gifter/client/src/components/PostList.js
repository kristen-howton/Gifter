import React, { useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import PostSearch from "./PostSearch";

const PostList = () => {
    const { posts, getAllPosts } = useContext(PostContext);

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <div>
            <PostSearch />
            {posts.map((post) => (
                <div key={post.id}>
                    <img src={post.imageUrl} alt={post.title} />
                    <p>
                        <strong>{post.title}</strong>
                    </p>
                    <p>{post.caption}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;