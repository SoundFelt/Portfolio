import './App.css';
import {useState} from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import TestComp from './testComp';

function App() {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    window.pageYOffset > 600 ? setShowScroll(true) : setShowScroll(false)
  };

  window.addEventListener('scroll', checkScrollTop)

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div className="App">
    <img className="scrollTop" style={{display: showScroll ? 'inline-block' : 'none'}} alt="hero-background"
    onClick={scrollTop} src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/50/000000/external-up-arrow-arrows-dreamstale-lineal-dreamstale-8.png"/>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <TestComp/>
    </div>
  );
}

export default App;
