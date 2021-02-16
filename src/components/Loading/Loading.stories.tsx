import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import Loading from './Loading';

export default {
  title: 'Loading',
  component: Loading,
} as Meta;

export const Default: Story = args => <Loading {...args} />;
