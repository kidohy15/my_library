import type { Meta, StoryObj } from '@storybook/react';

import { TextOnImage } from './TextOnImage';

const meta = {
  component: TextOnImage,
} satisfies Meta<typeof TextOnImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};