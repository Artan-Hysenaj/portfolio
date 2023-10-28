import { Testimonial } from '@/types';
import Image from 'next/image';

export type TestimonialsProps = {
  data: Testimonial[];
};

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  return (
    <section className="about-d py-4">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <div className="bottom-line"></div>
        <p className="lead text-center">
          Take a look at what my clients say...
        </p>
        <div className="testimonials">
          {data.map((testimonial) => (
            <div key={testimonial.id}>
              <p>{testimonial.content}</p>
              <ul>
                <li>
                  <Image
                    src={testimonial.src}
                    alt={testimonial.altText}
                    width={100}
                    height={100}
                  />
                </li>
                <li>
                  {testimonial.name}, {testimonial.city}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
