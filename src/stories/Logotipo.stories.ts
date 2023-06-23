import { Logotipo } from './../components/logotipo/logotipo'
import { StoryObj, Meta } from '@storybook/react'

const meta = {
  title: 'Component/Logotipo',
  component: Logotipo,
  tags: ['autodocs'],
  argTypes: {}

} satisfies Meta<typeof Logotipo>

export default meta
type Story = StoryObj<typeof meta>

export const LogotipoComponent : Story = {
  args: {

  }
}
