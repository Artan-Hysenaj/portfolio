import { Meta, StoryFn } from '@storybook/react';
import SecondaryLayout, { SecondaryLayoutProps } from './SecondaryLayout';
import { mockSecondaryLayoutProps } from './SecondaryLayout.mocks';

export default {
  title: 'layouts/SecondaryLayout',
  component: SecondaryLayout,
  argTypes: {},
} as Meta<typeof SecondaryLayout>;

const Template: StoryFn<typeof SecondaryLayout> = (args) => (
  <SecondaryLayout {...args} />
);

export const Base = Template.bind({});

Base.args = { ...mockSecondaryLayoutProps.base } as SecondaryLayoutProps;
