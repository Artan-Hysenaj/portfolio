import { Meta, StoryFn } from '@storybook/react';
import StatsList, { StatsListProps } from './StatsList';
import { mockStatsListProps } from './StatsList.mocks';

export default {
  title: 'home/stats/StatsList',
  component: StatsList,
  argTypes: {},
} as Meta<typeof StatsList>;

const Template: StoryFn<typeof StatsList> = (args) => <StatsList {...args} />;

export const Base = Template.bind({});

Base.args = { ...mockStatsListProps.base } as StatsListProps;
