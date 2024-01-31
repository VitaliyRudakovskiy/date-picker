import { Meta, StoryObj } from '@storybook/react';
import ErrorBoundary from './index';
declare const meta: Meta<typeof ErrorBoundary>;
export default meta;
type Story = StoryObj<typeof ErrorBoundary>;
export declare const WithoutError: Story;
export declare const WithError: Story;
