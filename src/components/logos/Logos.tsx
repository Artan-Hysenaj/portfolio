import { Logo } from '@/types';
import Image from 'next/image';

export type LogosProps = {
  data: Logo[];
};

const Logos: React.FC<LogosProps> = ({ data }) => {
  return (
    <section id="about-c" className="py-4 bg-light">
      <div className="container">
        <div className="about-logos">
          {data.map((logo) => (
            <Image
              key={logo.id}
              src={logo.src}
              alt={logo.altText}
              title={logo.altText}
              width={200}
              height={200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
