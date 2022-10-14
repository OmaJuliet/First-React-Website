// import Navbar from './components/Navbar';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Feature from './components/Feature';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import the configuration for authentication
import { auth } from './components/firebase';

//Import the method from firebase that will be needed to check if the authentication changes
import { onAuthStateChanged } from 'firebase/auth';


function App() {
  //function to keep track of authentication state of the user.
  const [user, setUser] = React.useState(null);
  const [authState, setAuthState] = React.useState(null);


  //To check it, we'll need useEffect
  React.useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(auth,
      async authenticatedUser => {
        if(authenticatedUser) {
          setUser(authenticatedUser.email)
          setAuthState('home');
        } else {
          setUser(null);
          setAuthState('login')
        }
      }
    )

    return unSubscribeAuth;
  }, [user])

  if(authState === null) return <div className="font-bold text-center text-4xl">Loading...</div>
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
