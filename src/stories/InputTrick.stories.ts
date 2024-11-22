import type { Meta, StoryObj } from '@storybook/react';

import { InputTrick } from './InputTrick';

const meta = {
  component: InputTrick,
} satisfies Meta<typeof InputTrick>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};