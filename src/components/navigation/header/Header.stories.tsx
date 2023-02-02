import { Meta, StoryFn } from '@storybook/react';
import Header, { HeaderProps } from './Header';
import { mockHeaderProps } from './Header.mocks';

export default {
  title: 'header/Header',
  component: Header,
  argTypes: {},
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const Base = Template.bind({});

Base.args = { ...mockHeaderProps.base } as HeaderProps;
