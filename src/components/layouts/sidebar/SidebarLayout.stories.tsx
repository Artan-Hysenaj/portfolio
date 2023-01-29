import { Meta, StoryFn } from '@storybook/react';
import SidebarLayout, { SidebarLayoutProps } from './SidebarLayout';
import { mockSidebarLayoutProps } from './SidebarLayout.mocks';

export default {
  title: 'layouts/SidebarLayout',
  component: SidebarLayout,
  argTypes: {},
} as Meta<typeof SidebarLayout>;

const Template: StoryFn<typeof SidebarLayout> = (args) => (
  <SidebarLayout {...args} />
);

export const Base = Template.bind({});

Base.args = { ...mockSidebarLayoutProps.base } as SidebarLayoutProps;
