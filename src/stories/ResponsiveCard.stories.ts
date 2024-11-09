import type { Meta, StoryObj } from '@storybook/react';

import { ResponsiveCard } from './ResponsiveCard';

const meta = {
  component: ResponsiveCard,
} satisfies Meta<typeof ResponsiveCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};