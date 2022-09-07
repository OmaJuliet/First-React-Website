import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
// import Features from './Features';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Blog />
      {/* <Features /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
