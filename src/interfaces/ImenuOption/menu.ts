export interface ImenuOption{
  optionName: string;
  icon:string;
  action(): void
}

export interface IActionsMenu {
  menuOptions : ImenuOption[]
}
