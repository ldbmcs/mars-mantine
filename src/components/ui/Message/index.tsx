import { showNotification } from '@mantine/notifications'
import { IconCheck, IconX } from '@tabler/icons'

const message = {
  success(message: string, title?: string) {
    showNotification({
      message,
      color: 'green',
      autoClose: 2000,
      icon: <IconCheck size={20} />,
      title,
    })
  },
  error(message: string) {
    showNotification({
      message,
      color: 'red',
      autoClose: 3000,
      icon: <IconX size={20} />,
    })
  },
}

export default message
