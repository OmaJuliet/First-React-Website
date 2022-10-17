// import Navbar from './components/Navbar';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Feature from './components/Feature';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <>
      <Router>
        <AuthContextProvider>
          <Routes>
            {/* <Route path="/home" element={<Home />} /> */}
            <Route
              path='/home'
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route path="/blogs" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Feature />} />
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
