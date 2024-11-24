import type { Meta, StoryObj } from '@storybook/react';

import { SlidingText } from './SlidingText';

const meta = {
  component: SlidingText,
} satisfies Meta<typeof SlidingText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};