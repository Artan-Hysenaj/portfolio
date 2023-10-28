import { Award } from '@/types';
import Image from 'next/image';

export type BioProps = {
  awards: Award[];
};

// eslint-disable-next-line no-unused-vars
const Bio: React.FC<BioProps> = ({ awards }) => {
  return (
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="bottom-line"></div>
      <p className="lead">
        Let me tell you a little about myself and what I do...
      </p>

      <div className="about-info">
        <Image
          src="/about.jpg"
          alt=""
          width="400"
          height="400"
          className="bio-image"
        />
        <div className="bio bg-light">
          <h4>Your Project Is In Safe Hands</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis nostrum, eaque velit ipsam facilis sed, quisquam
            nesciunt unde nihil voluptatum commodi consequuntur molestiae?
            Fugiat, perspiciatis reprehenderit. Architecto delectus vitae
            deserunt!
          </p>
        </div>

        {/* // TODO: decide what to show for the awards */}
        {/* {awards.map((award) => (
          <div key={award.id} className={`award-${award.id}`}>
            <i className="fas fa-award fa-3x"></i>
            <h3>{award.title}</h3>
            <p>{award.content}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Bio;
