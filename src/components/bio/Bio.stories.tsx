import { Meta, StoryFn } from '@storybook/react';
import Bio, { BioProps } from './Bio';
import { mockBioProps } from './Bio.mocks';

export default {
  title: 'bio/Bio',
  component: Bio,
  argTypes: {},
} as Meta<typeof Bio>;

const Template: StoryFn<typeof Bio> = (args) => <Bio {...args} />;

export const Base = Template.bind({});

Base.args = { ...mockBioProps.base } as BioProps;
