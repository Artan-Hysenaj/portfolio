import { Meta, StoryFn } from '@storybook/react';
import Testimonials, { TestimonialsProps } from './Testimonials';
import { mockTestimonialsProps } from './Testimonials.mocks';

export default {
  title: 'testimonials/Testimonials',
  component: Testimonials,
  argTypes: {},
} as Meta<typeof Testimonials>;

const Template: StoryFn<typeof Testimonials> = (args) => (
  <Testimonials {...args} />
);

export const Base = Template.bind({});

Base.args = { ...mockTestimonialsProps.base } as TestimonialsProps;
