import { Message } from './../components'
import { StoryObj, Meta } from '@storybook/react'

const meta = {
  title: 'Component/Message',
  component: Message,
  tags: ['autodocs'],
  argTypes: {}

} satisfies Meta<typeof Message>

export default meta
type Story = StoryObj<typeof meta>

export const MessageComponentError : Story = {
  args: {
    typeMessage: 'error',
    message: 'mensage de error'
  }
}

export const MessageComponentSuccess : Story = {
  args: {
    typeMessage: 'success',
    message: 'mensage de exito'
  }
}

export const MessageComponentWarning : Story = {
  args: {
    typeMessage: 'warning',
    message: 'mensage de alerta'
  }
}
