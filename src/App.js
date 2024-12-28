import logo from './logo.svg';
import './App.css';

import Nav from './Header/Navbar';
import Hom from './Home/Home';
import About from './About/About'
import Classe from './Classes/Classes';
import Train from './Trainer/Traniner';
import Price from './Price/Price';
import Team_swip from './Swiper_team/Teamswip';
import { Foot } from './Footer/Footer';
function App() {
  return (
    <>
      <Nav />
      <Hom />
      <About />
      <Classe />
      <Train />
      <Price />
      <Team_swip />
      <Foot />
    </>
  );
}

export default App;
