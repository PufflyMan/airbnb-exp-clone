import './App.css';
import Navbar from './Navbar.js';
import Hero from './Hero';
import Card from './Card';
import img from './images/image12.png';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
        img={img}
        rating={"5.0"}
        title={"Life Lessons with Katie Zaferes"}
        price={"136"}
        country={"USA"}
        review={"6"}
      />
    </div>
  )
}

export default App;
