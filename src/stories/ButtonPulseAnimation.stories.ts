import type { Meta, StoryObj } from '@storybook/react';

import { ButtonPulseAnimation } from './ButtonPulseAnimation';

const meta = {
  component: ButtonPulseAnimation,
} satisfies Meta<typeof ButtonPulseAnimation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};