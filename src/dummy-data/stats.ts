import { calculateWorkHours } from '@/helpers';
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
    title: '±±± Clients',
    number: 100,
  },
  {
    icon: faAward,
    title: 'Certifications',
    number: 15,
  },
  {
    icon: faHourglassStart,
    title: 'Hours Worked',
    number: calculateWorkHours('2022-08-01'), // August 1, 2022
  },
  {
    icon: faCodeBranch,
    title: 'Projects Completed',
    number: 4,
  },
];
