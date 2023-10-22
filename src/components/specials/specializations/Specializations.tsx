import { Specialization } from '@/types';
import SpecialsItem from '../specials-item/SpecialsItem';

export type SpecializationsProps = {
  specializations: Specialization[];
};

const Specializations: React.FC<SpecializationsProps> = ({
  specializations,
}) => {
  return (
    <section className="specializations text-center py-2">
      <div className="container">
        <h2 className="section-title">I Specialize In</h2>
        <div className="bottom-line" />
        <p className="lead">
          Single Page Applications as well as creating other Web products and
          complex layouts for websites governed by the latest standards.
        </p>
        <div className="specials">
          {specializations.map((special, index) => (
            <SpecialsItem
              key={special.title + index}
              icon={special.icon}
              title={special.title}
              content={special.content}
              iconClassName="fas fa-2x"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
