import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ darkMode, toggleDarkMode, children }) => {
  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Header className="fixed object-top z-1" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
