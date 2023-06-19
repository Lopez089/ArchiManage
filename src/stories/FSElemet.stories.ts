import type { Meta, StoryObj } from '@storyBook/react'
import { FSElement } from '../components'

const meta = {
  title: 'Component/FSElement',
  component: FSElement,
  tags: ['autodocs'],
  argTypes: {

  }
} satisfies Meta<typeof FSElement>

export default meta
type Story = StoryObj<typeof meta>

export const File : Story = {
  args: {
    typeElement: 'file',
    nameElement: 'Documento_1'
  }
}

export const folder : Story = {
  args: {
    typeElement: 'folder',
    nameElement: 'Forder 1'
  }
}
