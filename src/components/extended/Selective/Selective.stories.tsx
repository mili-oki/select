import { ComponentStory } from '@storybook/react';
import Selective from './Selective';

export default {
  title: 'Components/Selective',
  component: Selective
};

const Template: ComponentStory<typeof Selective> = (args) => <Selective {...args} />;

export const SingleSelective = Template.bind({});
SingleSelective.args = {
  label: 'Label',
  isMulti: false
};
SingleSelective.parameters = { controls: { include: ['label'] } };

export const MultipleSelective = Template.bind({});
MultipleSelective.args = {
  label: 'Label',
  isMulti: true
};
MultipleSelective.parameters = { controls: { include: ['label', 'isMulti'] } };

export const DisabledSelective = Template.bind({});
DisabledSelective.args = {
  label: 'Label',
  isMulti: true,
  isDisabled: true
};
DisabledSelective.parameters = { controls: { include: ['label', 'isDisabled', 'isMulti'] } };
