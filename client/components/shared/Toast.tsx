import { View, Text } from 'react-native'
import React from 'react'
import { Snackbar } from 'react-native-paper'

type Props = {
    toastText: string,
    visible: boolean,
}

const Toast = ({toastText, visible}: Props) => {
    const ondismiss = () => {
        visible = true;
    }
  return (
    <Snackbar
        visible={visible}
        duration={3000}
        onDismiss={ondismiss}
        action={{
          label: 'Undo',
        }}>
        {toastText}
      </Snackbar>
  )
}

export default Toast