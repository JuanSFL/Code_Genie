import React from 'react';
import './App.css';
import './Main.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import Landing from './Components/Landing/Landing';
import Login from './Components/Login/Login';
import { setContext } from '@apollo/client/link/context';
import Signup from './Components/SignUp/SignUp';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
       <Router>
       <Routes>
      <Route path="login" element = {<Login />}/>
      <Route path="signup" element = {<Signup />}/>
      <Route path="/" element= {<Landing />}/>
      </Routes>
      </Router>
    </div>
    </ApolloProvider>
  );
}

export default App;
