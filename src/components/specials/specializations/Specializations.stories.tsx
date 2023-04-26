import { Meta, StoryFn } from '@storybook/react';
import Specializations, { SpecializationsProps } from './Specializations';
import { mockSpecializationsProps } from './Specializations.mocks';

export default {
  title: 'home/specials/Specializations',
  component: Specializations,
  argTypes: {},
} as Meta<typeof Specializations>;

const Template: StoryFn<typeof Specializations> = (args) => (
  <Specializations {...args} />
);

export const Base = Template.bind({});

Base.args = { ...mockSpecializationsProps.base } as SpecializationsProps;
