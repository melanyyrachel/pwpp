import logo from './logo.svg';
import './App.css';
import BestGame from './Component/BestGame';
import Intro from './Component/Intro';
import NavigationBar from './Component/NavigationBar';
import TrendingGame from './Component/TrendingGame';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/landingPage.css";

function App() {
  return (
    <div>
    <div className="myBG">
      <NavigationBar title="Game Culik"/>
      <Intro/>
    </div>

    <div className="trending">
      <TrendingGame/>
    </div>
    
    <div className="best">
      <BestGame/>
    </div>

    <div className="myBG">
      <Contact/>
    </div> 

    <div className="">
      <Footer/>
    </div>

    
</div>
  );
}

export default App;
