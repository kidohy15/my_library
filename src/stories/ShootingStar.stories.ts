import type { Meta, StoryObj } from '@storybook/react';

import { ShootingStar } from './ShootingStar';

const meta = {
  component: ShootingStar,
} satisfies Meta<typeof ShootingStar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};