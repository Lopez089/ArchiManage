import { DashboardContainer } from '../container'
import { StoryObj, Meta } from '@storybook/react'

const meta = {
  title: 'Container/dashboardContainer',
  component: DashboardContainer,
  tags: ['autodocs'],
  argTypes: {}

} satisfies Meta<typeof DashboardContainer>

export default meta
type Story = StoryObj<typeof meta>

export const DashboardContainerDefault : Story = {
  args: {
  }
}
