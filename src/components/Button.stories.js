import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: { onClick: { action: 'onClick' } },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'click me',
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'click me',
  isDark: true,
};
