import Header from './components/shared/header/Header'
import Main from './components/pages/main'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main">
        <h1>main</h1>
      </div>
      <div id="about">
        <h1>About</h1>
      </div>
      <div id="volunteering">
        <h1>Volunteering</h1>
      </div>
      <div id="programs">
        <h1>Programs</h1>
      </div>
      <div id="horses">
        <h1>Horses</h1>
      </div>
      <div id="sponsorship">
        <h1>Sponsorship</h1>
      </div>
      <div id="contact">
        <h1>Contact</h1>
      </div>
      <div id="downloads">
        <h1>Downloads</h1>
      </div>
      <div id="faq">
        <h1>FAQ</h1>
      </div>
    </div>
  );
}

export default App;
