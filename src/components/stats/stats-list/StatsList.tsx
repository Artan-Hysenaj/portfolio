import { Stat } from '@/types';
import StatsItem from '../stats-item/StatsItem';

export type StatsListProps = {
  stats: Stat[];
};

const StatsList: React.FC<StatsListProps> = ({ stats }) => {
  return (
    <section className="text-center py-2">
      <div className="stats">
        {stats.map((item, index) => (
          <StatsItem
            key={item.title + index}
            icon={item.icon}
            title={item.title}
            number={item.number}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsList;
