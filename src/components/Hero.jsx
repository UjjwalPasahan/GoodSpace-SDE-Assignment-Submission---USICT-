import Button from './Button';
import Input from './Input';
import '../styles/Hero.scss';
import '../styles/ContactFormSection.scss'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <h3 className="hero__tagline">The World’s Most Configurable</h3>
        <h1 className="hero__title">Travel & Expense Management Software</h1>
        <p className="hero__subtitle">
          Configure <a href="/">any</a> rule. Enable a world-class mobile experience for your users. Get seamless reporting & integrations. Inbuilt OCR expense scanning. Manage travel & non-travel expenses. Open APIs to connect with external systems.
        </p>
        <div className="hero__search">
          <Input type="text" placeholder="Name" className="hero__search-input" width={'100px'} />
          <Input type="email" placeholder="Official Email ID" className="hero__search-input" width={'300px'} />
          <Button label="Start Trial" type="button" />
        </div>
        <p className="cta-signup__terms">30 Days free trial • Upto 10 users</p>
      </div>
    </section>
  );
};

export default Hero;
