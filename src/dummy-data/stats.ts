import { Stat } from '@/types';
import {
  faAward,
  faCodeBranch,
  faHourglassStart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export const stats: Stat[] = [
  {
    icon: faUser,
    title: 'Clients',
    number: 100,
  },
  {
    icon: faAward,
    title: 'Awards',
    number: 3,
  },
  {
    icon: faHourglassStart,
    title: 'Hours Worked',
    number: 3500,
  },
  {
    icon: faCodeBranch,
    title: 'Projects Completed',
    number: 135,
  },
];
