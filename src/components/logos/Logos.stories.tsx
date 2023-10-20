import { Meta, StoryFn } from '@storybook/react';
import Logos, { LogosProps } from './Logos';
import { mockLogosProps } from './Logos.mocks';

export default {
  title: 'logos/Logos',
  component: Logos,
  argTypes: {},
} as Meta<typeof Logos>;

const Template: StoryFn<typeof Logos> = (args) => <Logos {...args} />;

export const Base = Template.bind({});

Base.args = { ...mockLogosProps.base } as LogosProps;
