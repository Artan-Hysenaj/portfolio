import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { ProcessesItemProps } from './ProcessesItem';

const base: ProcessesItemProps = {
  content: 'Hello World',
  title: 'Hello World',
  icon: faIcons,
};

export const mockProcessesItemProps = {
  base,
};
