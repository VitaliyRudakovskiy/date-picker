import { Meta, StoryObj } from '@storybook/react';

import Modal from './index';

const meta: Meta<typeof Modal> = {
    title: 'Component/Modal',
    component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {};
