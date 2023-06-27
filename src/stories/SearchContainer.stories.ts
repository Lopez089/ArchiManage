import type { Meta, StoryObj } from '@storybook/react'
import { SearchContainer } from '../container'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Container/SearchContainer',
  component: SearchContainer,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof SearchContainer>

export default meta
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NavbarDefault: Story = {
  args: {

  }
}
