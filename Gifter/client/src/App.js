// import React from "react";
// import "./App.css";
// import { PostProvider } from "./providers/PostProvider";
// import PostList from "./components/PostList";
// import PostForm from "./components/PostForm";
// import { UserProfileProvider } from "./providers/UserProfileProvider";

// function App() {
//   return (
//     <div className="App">
//       <PostProvider>
//         <UserProfileProvider>
//           <PostForm />
//           <PostList />
//         </UserProfileProvider>
//       </PostProvider>

//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./components/ApplicationViews";
import { PostProvider } from "./providers/PostProvider";
import Header from "./components/Header"
import { UserProfileProvider } from "./providers/UserProfileProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <PostProvider>
          <UserProfileProvider>
            <Header />
            <ApplicationViews />
          </UserProfileProvider>
        </PostProvider>
      </Router>
    </div>
  );
}

export default App;