import type { Meta, StoryObj } from '@storybook/react';

import { GlitchText } from './GlitchText';

const meta = {
  component: GlitchText,
} satisfies Meta<typeof GlitchText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};