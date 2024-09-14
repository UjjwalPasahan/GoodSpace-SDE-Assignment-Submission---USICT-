import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import '../styles/ContactFormSection.scss';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Trial sign-up submitted:', formData);
    setFormData({ name: '', email: '' }); // Reset form
  };

  return (
    <div className="cta-signup">
      <div className="cta-signup__container">
        <h2 className="cta-signup__title">Manage your travel and expenses the smart way!</h2>

        <form className="cta-signup__form" onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            value={formData.name}
            placeholder="Your Name"
            handleChange={handleChange}
            width="300px"
          />
          <Input
            name="email"
            type="email"
            value={formData.email}
            placeholder="Your Email"
            handleChange={handleChange}
            width="300px"
          />
          <Button label="Start trial" type="submit" />
        </form>

        <p className="cta-signup__terms">30 Days free trial • Upto 10 users</p>
      </div>
    </div>
  );
};

export default ContactFormSection;
