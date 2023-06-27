import type { Meta, StoryObj } from '@storybook/react'
import { Search } from '../components/'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Component/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NavbarDefault: Story = {
  args: {

  }
}
