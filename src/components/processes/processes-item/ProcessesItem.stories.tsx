import { Meta, StoryFn } from '@storybook/react';
import ProcessesItem, { ProcessesItemProps } from './ProcessesItem';
import { mockProcessesItemProps } from './ProcessesItem.mocks';

export default {
  title: 'Templates/ProcessesItem',
  component: ProcessesItem,
  argTypes: {},
} as Meta<typeof ProcessesItem>;

const Template: StoryFn<typeof ProcessesItem> = (args) => (
  <ProcessesItem {...args} />
);

export const Base = Template.bind({});

Base.args = { ...mockProcessesItemProps.base } as ProcessesItemProps;
