import { Meta, StoryObj } from '@storybook/react'
import { ActionsMenu } from '../components'

const meta = {
  title: 'Component/ActionMenu',
  component: ActionsMenu,
  tags: ['autodocs'],
  argTypes: {

  }
} satisfies Meta<typeof ActionsMenu>

export default meta
type Story = StoryObj<typeof meta>

const menuOptions = [
  {
    optionName: 'abrir',
    icon: 'open',
    action: () => { console.log('fun') }
  },
  {
    optionName: 'cerrar',
    icon: 'close',
    action: () => { console.log('fun') }
  }
]

export const ActionMenuComponent :Story = {
  args: {
    menuOptions
  }
}
