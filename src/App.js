import './App.css';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Functionare from './components/Functionare';
import HeroSection from './components/HeroSection';
import Servicii from './components/Servicii';
import Useri from './components/Useri';
import bubbles from './images/bubbles.png'

function App() {
  return (
    <div className="App mx-auto">
      <HeroSection />
        <img src={bubbles} alt='graphic shape 2' className='absolute top-10 -z-10'/>
      <Servicii />
      <Functionare />
      <Useri />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
