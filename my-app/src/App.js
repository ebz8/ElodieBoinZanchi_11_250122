import './App.scss'
import { Routes, Route } from "react-router-dom"

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

  return (
      <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route path="/housing/:id" element={<Housing />}/>
          <Route path="/*" element={<Error404 />}/>
        </Routes>
      </main>
      <Footer />

      </div>
  );
}

export default App
