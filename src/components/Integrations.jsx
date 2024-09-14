import '../styles/Integrations.scss';
import greenImg from '../assets/integrationGreen.png'
import yellowImg from '../assets/integrationYellow.png'
import blueImg from '../assets/IntegerationBlue.png'
import arrows from '../assets/Vector2.png'
const integrations = [
  { name: 'HRMS Systems', color:"yellow" ,colorImg:yellowImg ,description: 'Seamlessly integrate with popular HRMS platforms for efficient employee data management.' },
  { name: 'Finance Systems', color:"green" ,colorImg:greenImg ,description: 'Connect with leading finance and accounting software for streamlined financial processes.' },
  { name: 'Single Sign-On Systems', color:"blue" ,colorImg:blueImg ,description: 'Enable secure and convenient access with SSO integration capabilities.' }
];

const Integrations = () => {
  return (
    <section className="integration">
      <div className="integration__container">
        <h2 className="integration__title">Integrations</h2>
        <img src={arrows} alt="" className='integration__vector' />
        <div className="integration__grid">
          {integrations.map((integration, index) => (
            <div key={index} className={`integration-card ${integration.color}`}>
              <div className="integration__top">
                <img src={integration.colorImg} alt="" />
                <h3 className="integration-card__title">{integration.name}</h3>
              </div>
              <p className="integration-card__description">{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;