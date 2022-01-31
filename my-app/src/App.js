import './App.scss'
import {Routes, Route} from "react-router-dom"
// import { useLocation } from 'react-router-dom'

// fonts
import '../src/assets/fonts/fonts.scss'

// pages et composants layout
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import Housing from './pages/Housing/Housing'
import About from './pages/About/About'
import Error404 from './pages/Error404/Error404'


function App() {
    // const location = useLocation()

  return (
      <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/housing/:id" element={<Housing />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/*" element={<Error404 />}/>
        </Routes>
      </main>
      <Footer />
      {/* {location.pathname === "/" || "/housing/:id" || "/about" ?  <Footer /> : null}  */}

      </div>
  );
}

export default App
