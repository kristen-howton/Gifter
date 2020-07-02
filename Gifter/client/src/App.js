import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { UserProfileProvider } from "./providers/UserProfileProvider";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <UserProfileProvider>
          <PostForm />
          <PostList />
        </UserProfileProvider>
      </PostProvider>

    </div>
  );
}

export default App;