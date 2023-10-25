import { Process } from '@/types';
import {
  faDesktop,
  faFileAlt,
  faObjectUngroup,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

export const processes: Process[] = [
  {
    icon: faFileAlt,
    title: 'Discuss The Project',
    content: `Project discussions set the stage for success. It's where ideas are born, goals are set, and the journey begins.`,
  },
  {
    icon: faDesktop,
    title: 'Brainstorming ^ Concept',
    content: `Brainstorming fuels creativity. It's the place where wild ideas are tamed into innovative app concepts.`,
  },
  {
    icon: faObjectUngroup,
    title: 'UI/UX Planning',
    content: `UI/UX planning defines user experiences. It's about creating designs that captivate and interfaces that guide effortlessly.`,
  },
  {
    icon: faThumbsUp,
    title: 'Interaction',
    content: `Interaction is the heartbeat of your app. It's where users connect with your creation, clicking, tapping, and experiencing your vision.`,
  },
];
