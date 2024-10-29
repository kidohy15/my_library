import type { Meta, StoryObj } from '@storybook/react';

import { TypeWriter } from './TypeWriter';

const meta = {
  component: TypeWriter,
} satisfies Meta<typeof TypeWriter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};