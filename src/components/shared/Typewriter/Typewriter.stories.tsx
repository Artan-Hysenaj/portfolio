import { Meta, StoryFn } from '@storybook/react';
import Typewriter, { TypewriterProps } from './Typewriter';
import { mockTypewriterProps } from './Typewriter.mocks';

export default {
  title: 'Shared/Typewriter',
  component: Typewriter,
  argTypes: {},
} as Meta<typeof Typewriter>;

const Template: StoryFn<typeof Typewriter> = (args) => <Typewriter {...args} />;

export const Base = Template.bind({});

Base.args = { ...mockTypewriterProps.base } as TypewriterProps;
