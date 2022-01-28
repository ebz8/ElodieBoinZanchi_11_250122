import './App.scss'
import {Routes, Route} from "react-router-dom"

// fonts
import '../src/assets/fonts/fonts.scss'

// components
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Housing from './components/Housing/Housing'
import About from './components/About/About'
import Error404 from './components/Error404/Error404'


function App() {
  return (
      <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/housing/:id" element={<Housing />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/404" element={<Error404 />}/>
        </Routes>
      </main>
      <Footer />
      </div>
  );
}

export default App
