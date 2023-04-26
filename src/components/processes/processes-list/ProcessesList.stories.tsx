import { Meta, StoryFn } from '@storybook/react';
import ProcessesList, { ProcessesListProps } from './ProcessesList';
import { mockProcessesListProps } from './ProcessesList.mocks';

export default {
  title: 'home/processes/ProcessesList',
  component: ProcessesList,
  argTypes: {},
} as Meta<typeof ProcessesList>;

const Template: StoryFn<typeof ProcessesList> = (args) => (
  <ProcessesList {...args} />
);

export const Base = Template.bind({});

Base.args = { ...mockProcessesListProps.base } as ProcessesListProps;
