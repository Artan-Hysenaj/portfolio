import { Meta, StoryFn } from '@storybook/react';
import ProgressBars, { ProgressBarsProps } from './ProgressBars';
import { mockProgressBarsProps } from './ProgressBars.mocks';

export default {
  title: 'progress/ProgressBars',
  component: ProgressBars,
  argTypes: {},
} as Meta<typeof ProgressBars>;

const Template: StoryFn<typeof ProgressBars> = (args) => (
  <ProgressBars {...args} />
);

export const Base = Template.bind({});

Base.args = { ...mockProgressBarsProps.base } as ProgressBarsProps;
