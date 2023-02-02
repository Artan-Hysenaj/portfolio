import { Meta, StoryFn } from '@storybook/react';
import Footer, { FooterProps } from './Footer';
import { mockFooterProps } from './Footer.mocks';

export default {
  title: 'footer/Footer',
  component: Footer,
  argTypes: {},
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = (args) => <Footer {...args} />;

export const Base = Template.bind({});

Base.args = { ...mockFooterProps.base } as FooterProps;
