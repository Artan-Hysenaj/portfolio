import { Meta, StoryFn } from '@storybook/react';
import NavLink, { NavLinkProps } from './NavLink';
import { mockNavLinkProps } from './NavLink.mocks';

export default {
  title: 'navlink/NavLink',
  component: NavLink,
  argTypes: {},
} as Meta<typeof NavLink>;

const Template: StoryFn<typeof NavLink> = (args) => <NavLink {...args} />;

export const Base = Template.bind({});

Base.args = { ...mockNavLinkProps.base } as NavLinkProps;
