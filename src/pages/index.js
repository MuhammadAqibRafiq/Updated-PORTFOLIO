import React,{useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Home  from '../components/Home/Home';
import About from '../components/About/About'
import Project from '../components/Project/Project'
import Skills from '../components/Skills/Skills'
import Footer from '../components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos";
import "aos/dist/aos.css";

function Index () {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200 });
  }, []);
  
  return (
    <div className="App">

      <Navbar/>
      <Home/>
      <Skills/>
      <About/>
      <Project/>
      <Footer/>

    </div>
  );
}

export default Index