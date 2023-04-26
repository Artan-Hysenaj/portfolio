import { Meta, StoryFn } from '@storybook/react';
import { mockBaseTemplateProps } from './ProcessesItem.mocks';
import BaseTemplate, { BaseTemplateProps } from './ProcessesItem';

export default {
  title: 'Templates/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
} as Meta<typeof BaseTemplate>;

const Template: StoryFn<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});

Base.args = { ...mockBaseTemplateProps.base } as BaseTemplateProps;
