import React from 'react'
import { ActionItem } from '../../components'
import { IActionsMenu, ImenuOption } from '../../interfaces'

export const ActionsMenu = ({ menuOptions } : IActionsMenu) => {
  return (
    <ul>
      {
        menuOptions.map(({ optionName, icon, action }: ImenuOption) =>
        <ActionItem
          key={optionName}
          optionName={optionName}
          icon={icon}
          action={action}
        />

        )
      }
    </ul>
  )
}
