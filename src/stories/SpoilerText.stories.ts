import type { Meta, StoryObj } from '@storybook/react';

import { SpoilerText } from './SpoilerText';

const meta = {
  component: SpoilerText,
} satisfies Meta<typeof SpoilerText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};