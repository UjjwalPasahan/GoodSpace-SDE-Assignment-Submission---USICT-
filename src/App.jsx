
import Header from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import IconCarousel  from './components/IconCarousel';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import ContactFormSection from './components/ContactFormSection';
import Footer from './components/Footer';
import "./styles/main.scss"
const App = () => {
  return (
    <div className="app gradient-background">
      <div className=''>
      <Header />
      <hr />
      <Hero />
        <IconCarousel  /> 
        <Features />
      </div>
        <Integrations />
        <Testimonials />
        <ContactFormSection />
      <Footer />
    </div>
  );
};

export default App;