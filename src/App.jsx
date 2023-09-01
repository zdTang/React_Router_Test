import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Header from './Components/Header';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Router>
      <Header/>{/* https://reactrouter.com/en/main/router-components/browser-router*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>     
    </>
  )
}

export default App
