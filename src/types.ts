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

export type Award = {
  id: number;
  title: string;
  content: string;
  src: string;
};

export type Progress = {
  id: number;
  title: string;
  value: number;
};

export type Testimonial = {
  id: number;
  src: string;
  altText: string;
  name: string;
  city: string;
  content: string;
};

export type Logo = {
  id: number;
  src: string;
  altText: string;
};

export type Work = {
  id: number;
  src: string;
  altText: string;
  category: string;
  title: string;
};
