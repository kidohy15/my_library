import type { Meta, StoryObj } from '@storybook/react';

import { LoaderAnimation } from './LoaderAnimation';

const meta = {
  component: LoaderAnimation,
} satisfies Meta<typeof LoaderAnimation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};