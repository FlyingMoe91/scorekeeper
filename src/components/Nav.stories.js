import Navigation from './Nav.js';

export default {
  title: 'components/Navigation',
  component: Navigation,
};

const Template = args => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {};
