import React, { useContext } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { Switch, Route, Redirect } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostDetails from "./PostDetails";
import UserPosts from "./UserPosts"
import Register from "./Register";
import Login from "./Login";

const ApplicationViews = () => {
    const { isLoggedIn } = useContext(UserProfileContext);

    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/posts/add">
                    {isLoggedIn ? <PostForm /> : <Redirect to="/login" />}
                </Route>

                <Route path="/posts/:id">
                    {isLoggedIn ? <PostDetails /> : <Redirect to="/login" />}
                </Route>

                <Route path="/users/:userProfileId">
                    {isLoggedIn ? <UserPosts /> : <Redirect to="/login" />}
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </main >
    );
};

export default ApplicationViews;