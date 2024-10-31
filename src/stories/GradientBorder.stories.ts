import type { Meta, StoryObj } from '@storybook/react';

import { GradientBorder } from './GradientBorder';

const meta = {
  component: GradientBorder,
} satisfies Meta<typeof GradientBorder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};