import { ComponentStory } from '@storybook/react';
import { P } from './P';

export default {
  title: 'Typography/Paragraph',
  component: P
};

const Template: ComponentStory<typeof P> = (args) => <P {...args} />;
const parameters = { controls: { include: ['children'] } };
const defaultArgs = {
  children: 'Lorem ipsum dolor sit ammet'
};

export const Small = Template.bind({});
Small.args = { ...defaultArgs, variant: 'sm' };
Small.parameters = parameters;

export const Default = Template.bind({});
Default.args = defaultArgs;
Default.parameters = parameters;

export const Large = Template.bind({});
Large.args = { ...defaultArgs, variant: 'lg' };
Large.parameters = parameters;

export const ExtraLarge = Template.bind({});
ExtraLarge.args = { ...defaultArgs, variant: 'xl' };
ExtraLarge.parameters = parameters;

export const ErrorDefault = Template.bind({});
ErrorDefault.args = { ...defaultArgs, isError: true };
ErrorDefault.parameters = parameters;
