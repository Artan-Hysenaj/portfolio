import { Process } from '@/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ProcessesItemProps = Process;

const ProcessesItem: React.FC<ProcessesItemProps> = ({
  icon,
  title,
  content,
}) => {
  return (
    <div>
      <div className="process-wrap">
        <FontAwesomeIcon icon={icon} size="4x" className="process-wrap-icon" />
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default ProcessesItem;
