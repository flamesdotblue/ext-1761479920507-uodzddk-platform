import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import HelloMessage from './components/HelloMessage.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <HelloMessage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
