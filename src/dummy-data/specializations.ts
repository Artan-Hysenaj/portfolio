import { Specialization } from '@/types';
import {
  faDesktop,
  faFileAlt,
  faObjectUngroup,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

export const specializations: Specialization[] = [
  {
    icon: faFileAlt,
    title: 'Concepting',
    content: `Concepting is where the magic begins. It's the stage where you shape your app's core idea and functionality, laying the foundation for an exciting journey.`,
  },
  {
    icon: faDesktop,
    title: 'UI/UX',
    content: `UI/UX design is all about crafting an intuitive and visually appealing user experience. It's where you create the blueprint for how users will interact with your app.`,
  },
  {
    icon: faObjectUngroup,
    title: 'Visual Design',
    content:
      'Visual design adds the aesthetics to your app. This step involves choosing colors, fonts, and creating a beautiful interface that aligns with your brand and enhances user engagement.',
  },
  {
    icon: faThumbsUp,
    title: 'Interaction',
    content: `Interaction design focuses on how users engage with your app. It's the art of making buttons clickable, forms user-friendly, and ensuring that the app responds seamlessly to user actions.`,
  },
];
