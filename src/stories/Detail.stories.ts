import type { Meta, StoryObj } from '@storyBook/react'
import { Detail } from '../components'

const meta = {
  title: 'Component/Detail',
  component: Detail,
  tags: ['autodocs'],
  argTypes: {

  }
} satisfies Meta<typeof Detail>

export default meta
type Story = StoryObj<typeof meta>

export const DetailComponent : Story = {
  args: {
    icon: 'error',
    owner: 'Yo',
    modified: '3/3/23',
    open: '7/7/23',
    created: '9/9/22'
  }
}
