import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import profilePicture from "../images/profile.png";
import ThoughtList from '../components/ThoughtList/index';
import { Helmet } from "react-helmet";

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import NotAuthorized from '../components/NotAuthorized';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
     <NotAuthorized/>
    );
  }
console.log(user)
  return (
    <div> 
      <Helmet>
          <title>Code Genie | Profile</title>
      </Helmet>
      <div>
      <div className="profile-container">
        <h1>Hello, {user.username}</h1>
        <div className="profile-info">
          <img src={profilePicture} className="profile-img" alt="" />
          <div className="user-details">
            <p className="username"><b>{user.username}</b></p>
            <p>Front End Software Engineer. Here to answer questions!</p>
            </div>
            <div className="user-answers">
                <h3>Recently Asked Questions</h3>
                <hr/>
            </div>
            <div className="recently-answered">
          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s thoughts...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default Profile;
