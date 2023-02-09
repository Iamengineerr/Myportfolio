
import './App.css';
import Home from './Sections/Home/Home';
import About from './Sections/About/About';
import Experience from './Sections/Experience/Experience';
import Work from './Sections/Work/Work';
import Contact from './Sections/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ContactBar from './Components/ContactBar/ContactBar';

function App() {
  return (
    <main className="main">
       <Navbar /> 
      <div className="app_section_container">
        <Home />
         <About /> 
         <Experience /> 
         <Work /> 
         <Contact />
         </div>
        <ContactBar /> 
       <Footer /> 
    </main>
  );
}

export default App;
