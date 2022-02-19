import Header from './components/shared/header'
import Home from './components/pages/home'
import About from './components/pages/about'
import Volunteer from './components/pages/volunteering'
import Courses from './components/pages/courses'
import Horses from './components/pages/horses'
import Sponsor from './components/pages/sponsor'
import Contact from './components/pages/contact'
import Download from './components/pages/download'
import FAQ from './components/pages/faq'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id='top' />
      <div className='screen' id='main'>
        <Home />
      </div>
      <div className='screen' id='about'>
        <About />
      </div>
      <div className='screen' id='volunteering'>
        <Volunteer />
      </div>
      <div className='screen' id="programs">
        <Courses />
      </div>
      <div className='screen' id="horses">
        <Horses />
      </div>
      <div className='screen' id="sponsorship">
        <Sponsor />
      </div>
      <div className='screen' id="contact">
        <Contact />
      </div>
      <div className='screen' id="downloads">
        <Download />
      </div>
      <div className='screen' id="faq">
        <FAQ />
      </div>
    </div>
  );
}

export default App;
