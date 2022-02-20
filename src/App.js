import { Header } from './components/shared'
import { Home, About, Volunteer, Courses, Horses, Sponsor, Contact, Download, FAQ } from './components/pages'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id='top' />
      <div className='screen' id='home'>
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
