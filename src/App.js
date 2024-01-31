import logo from './logo.svg';
import Info from './components/Info';
import './App.css';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return(
    <div className='contend'>
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  )
}

export default App;
