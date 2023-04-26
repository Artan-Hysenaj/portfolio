import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type Stat = {
  title: string;
  number: number;
  icon: IconProp;
};

export type Specialization = {
  icon: IconProp;
  title: string;
  content: string;
};

export type Process = {
  icon: IconProp;
  title: string;
  content: string;
};
