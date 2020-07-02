import React, { useState } from "react";

export const UserProfileContext = React.createContext();

export const UserProfileProvider = (props) => {
    const [userProfiles, setUserProfile] = useState([]);

    const getAllUserProfiles = () => {
        return fetch("/api/UserProfile")
            .then((res) => res.json())
            .then(setUserProfile);
    };
    return (
        <UserProfileContext.Provider value={{ userProfiles, getAllUserProfiles }}>
            {props.children}
        </UserProfileContext.Provider>
    );
};