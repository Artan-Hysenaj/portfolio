import { Meta, StoryFn } from '@storybook/react';
import SpecialsItem, { SpecialsItemProps } from './SpecialsItem';
import { mockSpecialsItemProps } from './SpecialsItem.mocks';

export default {
  title: 'home/specials/SpecialsItem',
  component: SpecialsItem,
  argTypes: {},
} as Meta<typeof SpecialsItem>;

const Template: StoryFn<typeof SpecialsItem> = (args) => (
  <SpecialsItem {...args} />
);

export const Base = Template.bind({});

Base.args = { ...mockSpecialsItemProps.base } as SpecialsItemProps;
