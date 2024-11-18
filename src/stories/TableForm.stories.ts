import type { Meta, StoryObj } from '@storybook/react';

import { TableForm } from './TableForm';

const meta = {
  component: TableForm,
} satisfies Meta<typeof TableForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};