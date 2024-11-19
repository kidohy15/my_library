import type { Meta, StoryObj } from '@storybook/react';

import { TruncateText } from './TruncateText';

const meta = {
  component: TruncateText,
} satisfies Meta<typeof TruncateText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};