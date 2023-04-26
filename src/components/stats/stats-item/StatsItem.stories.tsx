import { Meta, StoryFn } from '@storybook/react';
import StatsItem, { StatsItemProps } from './StatsItem';
import { mockStatsItemProps } from './StatsItem.mocks';

export default {
  title: 'home/stats/StatsItem',
  component: StatsItem,
  argTypes: {},
} as Meta<typeof StatsItem>;

const Template: StoryFn<typeof StatsItem> = (args) => <StatsItem {...args} />;

export const Base = Template.bind({});

Base.args = { ...mockStatsItemProps.base } as StatsItemProps;
