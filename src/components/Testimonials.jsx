import { Star } from 'lucide-react';
import '../styles/Testimonials.scss';

const testimonials = [
  {
    name: 'John Smith',
    position: 'CEO, TechCorp',
    content: 'This software has revolutionized how we manage our travel expenses. It is intuitive, efficient, and has saved us countless hours.',
    rating: 5,
    image:'https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg',
    customColor:'purple',
  },
  {
    name: 'Jane Doe',
    position: 'CFO, InnovateCo',
    content: 'The integration capabilities are outstanding. It seamlessly connects with our existing systems, making the transition smooth and hassle-free.',
    rating: 5,
    image:'https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg',
    customColor:'green',
  },
  {
    name: 'Mike Johnson',
    position: 'Travel Manager, GlobalTech',
    content: 'The real-time compliance checks have been a game-changer for us. We have significantly reduced policy violations and improved our overall expense management.',
    rating: 5,
    image:'https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg',
    customColor:'blue',
  }
];

const Testimonials = () => {
  return (
    <section className="testimonial">
      <div className="testimonial__container">
        <h2 className="testimonial__title">What our customers say</h2>
        <div className="testimonial__grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-card ${testimonial.customColor}`}>
              <div className="testimonial-card__content">{testimonial.content}</div>
              <div className="testimonial-card__rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#FFFF00" color="#FFFF00" />
                ))}
              </div>
              <div className="testimonial-card__author">
                <img className='testimonial-card__image' src={`${testimonial.image}`} alt="" />
                <div className='testimonial-card__np'>
                <h3 className="testimonial-card__name">{testimonial.name}</h3>
                <p className="testimonial-card__position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;