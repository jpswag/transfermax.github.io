import React, { useEffect, useState } from 'react';
import Header from '../../components/Utils/Header';
import Navbar from '../../components/Homepage/Navbar';
import Main from '../../components/Homepage/Main';
import About from '../../components/Homepage/About';
import Usage from '../../components/Homepage/Usage';
import Contact from '../../components/Homepage/Contact';
import Footer from '../../components/Utils/Footer';
import { Helmet } from 'react-helmet';
import './HomePage.css';

const Home: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem('is_login') === 'true';
    setIsLogin(loginStatus);
  }, []);

  return (
    <div className="Home">
      <Helmet>
        <title>TransferMax - Home</title>
      </Helmet>
      <div className="fixed top-0 left-0 w-full z-50">
        <header className="bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <Header />
            {isLogin ? (
              <nav className="space-x-4 flex items-center">
                <div className="relative dropdown">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 flex items-center">
                    <i className="fa fa-user mr-2"></i>
                    <span>John Pan</span>
                  </button>
                  <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                    <a className="edit-profile block px-4 py-2 text-gray-800 hover:bg-gray-100" href="/">
                      Edit Profile
                    </a>
                    <a
                      className="logout block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      href="/"
                      onClick={() => {
                        localStorage.removeItem('is_login');
                        setIsLogin(false);
                      }}
                    >
                      Log Out
                    </a>
                  </div>
                </div>
              </nav>
            ) : (
              <nav className="space-x-4">
                <a className="hover:underline text-blue-600 font-semibold text-lg" href="/login">
                  Log in
                </a>
                <a
                  className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-lg hover:bg-green-600"
                  href="/signup"
                >
                  Sign up
                </a>
              </nav>
            )}
          </div>
        </header>
        <Navbar />
      </div>
      <div id="home" className="pt-32">
        <Main />
      </div>
      <div id="about" className="pt-32">
        <About />
      </div>
      <div id="usage" className="pt-32">
        <Usage />
      </div>
      <div id="contact" className="pt-32">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
