import { StoryObj, Meta } from '@storybook/react'
import { ActionItem } from '../components'

const meta = {
  title: 'Component/ActionItem',
  component: ActionItem,
  tags: ['autodocs'],
  argTypes: {}

} satisfies Meta<typeof ActionItem>

export default meta
type Story = StoryObj<typeof meta>

export const ActionItemComponent : Story = {
  args: {
    optionName: 'cerrar',
    icon: 'close',
    action: () => console.log('fun')
  }
}
