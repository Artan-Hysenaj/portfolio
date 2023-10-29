import { Award } from '@/types';
import { faAward, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export type BioProps = {
  awards: Award[];
};

const Bio: React.FC<BioProps> = ({ awards }) => {
  return (
    <section className="about-a text-center py-3">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          Let me tell you a little about myself and what I do...
        </p>

        <div className="about-info">
          <Image
            src="/about.jpg"
            alt="Profile picture"
            width={400}
            height={400}
            className="bio-image"
          />
          <div className="bio bg-light">
            <h4>Your Project Is In Safe Hands</h4>
            <br />
            <div className="bio-content">
              <p>
                👨‍💻 With over 1.5 years of experience, I&apos;m a passionate
                React Developer dedicated to delivering innovative web
                solutions.
              </p>
              <p>
                💼 My Toolkit: ReactJS, NextJS, TailwindCSS, Redux Toolkit,
                TypeScript, and a treasure chest of advanced JavaScript tools.
              </p>
              <p>
                🌟 I believe in lifelong learning and approach each day as an
                opportunity to acquire new knowledge and skills. By constantly
                pushing my capabilities, I strive to stay ahead of industry
                trends and deliver innovative solutions.
              </p>
              <p>
                🌐 Let&apos;s connect and embark on this journey of continuous
                growth and excellence in the world of web development!
              </p>
            </div>
          </div>

          {awards.map((award) => (
            <div key={award.id} className={`award-${award.id}`}>
              <FontAwesomeIcon icon={faAward} className="fas fa-3x" />
              <h3>
                {award.title}
                <a href={award.src} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    size="xs"
                    className="award-links"
                  />
                </a>
              </h3>
              <p>{award.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;
