import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { useParams } from 'react-router-dom';



function GenieTokens() {

  const { username: userParam } = useParams();

  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { genieTokens: userParam },
  });

  const user = data?.me || data?.user || {};

  return (
    <p className="genieTokens">
   {user.genieTokens}
    </p>
  );
}

export default GenieTokens;