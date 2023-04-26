import { Stat } from '@/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type StatsItemProps = Stat;

const StatsItem: React.FC<StatsItemProps> = ({ icon, title, number }) => {
  return (
    <div>
      <ul>
        <li>
          <FontAwesomeIcon icon={icon} size="3x" />
        </li>
        <li className="stats-title">{title}</li>
        <li className="stats-number">{number}</li>
      </ul>
    </div>
  );
};

export default StatsItem;
