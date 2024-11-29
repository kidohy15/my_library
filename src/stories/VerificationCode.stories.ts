import type { Meta, StoryObj } from '@storybook/react';

import { VerificationCode } from './VerificationCode';

const meta = {
  component: VerificationCode,
} satisfies Meta<typeof VerificationCode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // let boxes = document.querySelectorAll('.box')

  // window.addEventListener()
};