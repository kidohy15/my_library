import type { Meta, StoryObj } from '@storybook/react';

import { TwoDToThreeD } from './TwoDToThreeD';

const meta = {
  component: TwoDToThreeD,
} satisfies Meta<typeof TwoDToThreeD>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};