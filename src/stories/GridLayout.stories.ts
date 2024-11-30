import type { Meta, StoryObj } from '@storybook/react';

import { GridLayout } from './GridLayout';

const meta = {
  component: GridLayout,
} satisfies Meta<typeof GridLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};