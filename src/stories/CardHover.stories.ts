import type { Meta, StoryObj } from '@storybook/react';

import { CardHover } from './CardHover';

const meta = {
  component: CardHover,
} satisfies Meta<typeof CardHover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};