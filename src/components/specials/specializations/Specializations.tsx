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
          Building Remarkable React Applications, From Concept to Interaction.
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
