import type { Meta, StoryObj } from '@storybook/react'
import { Nav } from '../components/'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Component/Nav',
  component: Nav,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Nav>

export default meta
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NavDefault: Story = {
  args: {

  }
}
