import { Meta, StoryFn } from '@storybook/react';
import { mockSearchProps } from './Search.mocks';
import Search, { SearchProps } from './Search';

export default {
  title: 'utility/Search',
  component: Search,
  argTypes: {},
} as Meta<typeof Search>;

const Template: StoryFn<typeof Search> = (args) => (
  <Search {...args} />
);

export const Base = Template.bind({});

Base.args = { ...mockSearchProps.base } as SearchProps;
