import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


const UserProfile = ({ userProfile }) => {
    return (
        <Card className="m-4">
            <p className="text-left px-2">User Name: {userProfile.name}</p>
            <CardImg top src={userProfile.imageUrl} alt={userProfile.name} />
            <CardBody>
                <p>
                    <Link to={`/posts/${userProfile.id}`}>
                        <strong>{userProfile.name}</strong>
                    </Link>
                </p>
                <p>{userProfile.bio}</p>
                <div>{userProfile.email}</div>
            </CardBody>
        </Card>
    );
};

export default UserProfile;