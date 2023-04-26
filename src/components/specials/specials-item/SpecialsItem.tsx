import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type SpecialsItemProps = {
  icon: IconProp;
  title: string;
  content: string;
  iconClassName?: string;
};

const SpecialsItem: React.FC<SpecialsItemProps> = ({
  icon,
  title,
  content,
  iconClassName,
}) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} className={iconClassName} />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default SpecialsItem;
