import type { Meta, StoryObj } from '@storybook/react';

import { GradirentBackground } from './GradirentBackground';

const meta = {
  component: GradirentBackground,
} satisfies Meta<typeof GradirentBackground>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};