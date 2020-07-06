import React, { useContext, useRef, useEffect } from "react"
import { PostContext } from "../providers/PostProvider"
import { UserProfileContext } from "../providers/UserProfileProvider"
import { FormGroup } from "reactstrap"
import { useHistory } from "react-router-dom";

export default props => {

    const { addPost } = useContext(PostContext)
    const { userProfiles, getAllUserProfiles } = useContext(UserProfileContext)
    const history = useHistory();

    useEffect(() => {
        getAllUserProfiles();
    }, []);



    const title = useRef()
    const image = useRef()
    const userProfile = useRef()
    const caption = useRef()


    const constructNewPost = () => {
        const UserProfileId = parseInt(userProfile.current.value)


        const newPostObj = {
            Title: title.current.value,
            ImageUrl: image.current.value,
            Caption: caption.current.value,
            UserProfileId: UserProfileId
        }
        console.log(newPostObj)
        // and save it to the API.
        addPost(newPostObj)
            .then(props.toggler)
            .then((p) => {
                // Navigate the user back to the home route
                history.push("/")
            });
    };

    return (
        <FormGroup className="PostForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postTitle">Title of Post: </label>
                    <input
                        type="text"
                        id="postTitle"
                        ref={title}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="post title"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="imageUrl">Picture: </label>
                    <input
                        type="text"
                        id="imageUrl"
                        ref={image}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="post url"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="userProfile">Assign to User: </label>
                    <select
                        defaultValue=""
                        name="userProfile"
                        ref={userProfile}
                        id="userProfile"
                        className="form-control"
                    >
                        <option value="0">Select a user</option>
                        {userProfiles.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="caption">Caption: </label>
                    <input
                        type="text"
                        id="caption"
                        ref={caption}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="caption"
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        // create the post function goes here
                        constructNewPost()
                    }
                }
                className="btn btn-primary">
                Post
            </button>
        </FormGroup>
    )
}