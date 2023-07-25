
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Pagenotfound from './pages/Pagenotfound';
import Projectpage from './components/Projectpage';

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Pagenotfound />} />
      <Route path="/" element={<Homepage />} />
      <Route path="projects" element={<Projectpage />} />
    </Routes>
  )
}

export default App
