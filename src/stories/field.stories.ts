import type { Meta, StoryObj } from '@storybook/react'
import { Field } from '../components/'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Component/Field',
  component: Field,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FieldWithIcon: Story = {
  args: {
    type: 'text',
    placeholder: 'Buscar',
    icon: 'search'
  }
}
