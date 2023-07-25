import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import Heropage from './../components/Heropage';
import Skills from './../components/Skills';
import Projectpage from '../components/Projectpage';
import About from '../components/About';

const Homepage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <div {...darkMode ? "dark" : ""} className=" dark:bg-gray-900 dark:text-white divide-y divide-blue-200">
        <Heropage />
        <Skills/>
        <Projectpage />
        <About/>


      </div>
    </Layout>
  )
}

export default Homepage
