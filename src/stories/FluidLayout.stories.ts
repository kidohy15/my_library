import type { Meta, StoryObj } from '@storybook/react';

import { FluidLayout } from './FluidLayout';

const meta = {
  component: FluidLayout,
} satisfies Meta<typeof FluidLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};