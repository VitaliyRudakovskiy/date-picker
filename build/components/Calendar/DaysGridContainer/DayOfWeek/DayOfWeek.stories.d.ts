import { Meta, StoryObj } from '@storybook/react';
import DayOfWeek from './index';
declare const meta: Meta<typeof DayOfWeek>;
export default meta;
type Story = StoryObj<typeof DayOfWeek>;
export declare const Primary: Story;
export declare const Weekend: Story;
export declare const Today: Story;
export declare const DayInPrevMonth: Story;
