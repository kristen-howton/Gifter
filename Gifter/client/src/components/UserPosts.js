// import React, { useEffect, useContext, useState } from "react";
// import { ListGroup, ListGroupItem } from "reactstrap";
// import { UserProfileContext } from "../providers/UserProfileProvider";
// import { useParams } from "react-router-dom";
// import UserProfile from "./UserProfile"


// const UserPosts = () => {
//     const [userProfiles, setUserProfile] = useState([]);
//     const { getAllUserProfiles } = useContext(UserProfileContext);
//     const { id } = useParams();

//     useEffect(() => {
//         getAllUserProfiles(id).then(setUserProfile);
//     }, []);

//     if (!userProfiles) {
//         return null;
//     }

//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-sm-12 col-lg-6">
//                     <UserProfile userProfile={userProfiles} />
//                     <ListGroup>
//                         {userProfiles.comments.map((c) => (
//                             <ListGroupItem>{c.message}</ListGroupItem>
//                         ))}
//                     </ListGroup>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserPosts;


import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { PostContext } from "../providers/PostProvider";
import { useParams } from "react-router-dom";
import Post from "./Post";

const UserPosts = () => {
    const [posts, setPosts] = useState();
    const { getAllUserPosts } = useContext(PostContext);
    const { userProfileId } = useParams();

    useEffect(() => {
        getAllUserPosts(userProfileId)
            .then(setPosts);
    }, []);

    if (!posts) {
        return null;
    }

    return (

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    {posts.map((post) => (
                        <div key={post.id} >
                            <Post post={post} />
                            {/* <ListGroup>
                                {post.comments.map((c) => (
                                    <ListGroupItem>{c.message}</ListGroupItem>
                                ))}
                            </ListGroup> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

};

export default UserPosts;