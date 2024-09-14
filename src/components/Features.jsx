
import '../styles/Features.scss';
import crowd from '../assets/groups_FILL0_wght400_GRAD0_opsz24@2x.png'
import check from '../assets/groups_FILL0_wght400_GRAD0_opsz24@2x-1.png'
import folder from '../assets/groups_FILL0_wght400_GRAD0_opsz24@2x-2.png'
import star from '../assets/groups_FILL0_wght400_GRAD0_opsz24@2x-3.png'
import link from '../assets/groups_FILL0_wght400_GRAD0_opsz24@2x-4.png'
import settings from '../assets/groups_FILL0_wght400_GRAD0_opsz24@2x-5.png'
import scan from '../assets/groups_FILL0_wght400_GRAD0_opsz24@2x-6.png'
import bell from '../assets/groups_FILL0_wght400_GRAD0_opsz24@2x-7.png'
import bcase from '../assets/groups_FILL0_wght400_GRAD0_opsz24@2x-8.png'

const features = [
  { icon: crowd, title: 'Setup Employee Groups', description: 'Use any parameter to setup distinct employee groups to implement policies',comingSoon:false },
  { icon: check, title: 'The Definitive Rule Engine', description: 'Gain valuable insights into your company\'s spending patterns and financial health.',comingSoon:false },
  { icon: folder, title: 'Customized Reports', description: 'Access customizable dashboards and detailed reports for informed decision-making.',comingSoon:false },
  { icon: star, title: 'Superior Employee Experience', description: 'Manage all expenses and travel requests easily. Empower your employees with personalized reports.',comingSoon:false },
  { icon: link, title: 'Easy Integrations', description: 'Integrate with your upstream, HRMS or your downstream finance system to seamlessly deliver value through our Open APIs.',comingSoon:false },
  { icon: settings, title: 'Configurable Workflows', description: 'Configure approvals or rejections. Escalations and reports. At will. Setup new groups.',comingSoon:false },
  { icon: scan, title: 'Scan any Bill', description: 'The world’s best OCR system backs up this product. All data goes in. 99% success.',comingSoon:false },
  { icon: bell, title: 'AI-Based Concierge', description: 'Ask the concierge to change things during your travel - and it will trigger relevant actions 24x7.',comingSoon:true },
  { icon: bcase, title: 'AI-Assisted Trip Planning', description: 'Just tell us what you want to do in normal language and we will try and put together the best itinerary for you.',comingSoon:true }
];

const Features = () => {
  return (
    <section className="features">
      <div className="features__container">
        <h2 className="features__title">Features that suit your needs</h2>
        <div className="features__grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className='feature-card__toph'>
                <div className="feature-card__icon custom-border"><img src={feature.icon} alt="" /></div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <h6 className={`${feature.comingSoon?"feature-card__comingSoon":""}`}>{feature.comingSoon ? <p>coming soon</p>:undefined}</h6>
              </div>
              <p className="feature-card__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;