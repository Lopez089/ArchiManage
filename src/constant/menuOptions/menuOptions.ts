import { ImenuOption } from '../../interfaces'

export const menuOptions: ImenuOption[] = [
  {
    optionName: 'Compartir',
    icon: 'ios_share',
    action: () => console.log('fun')
  },
  {
    optionName: 'Mover a',
    icon: 'drive_file_move',
    action: () => console.log('fun')
  },
  {
    optionName: 'Cambiar nombre',
    icon: 'drive_file_rename_outline',
    action: () => console.log('fun')
  },
  {
    optionName: 'Ver detalles',
    icon: 'info',
    action: () => console.log('fun')
  },
  {
    optionName: 'Descargar',
    icon: 'download',
    action: () => console.log('fun')
  },
  {
    optionName: 'Eliminar',
    icon: 'delete',
    action: () => console.log('fun')
  }

]
