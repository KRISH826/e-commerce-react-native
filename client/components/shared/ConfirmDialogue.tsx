import React, { useEffect } from "react";
import { Button, Dialog, Portal, Text } from "react-native-paper";

type Props = {
  visibleModal: boolean;
  onCancel: () => void; // Callback for Cancel
  onConfirm: () => void; // Callback for Confirm
};

const ConfirmDialogue = ({ visibleModal, onCancel, onConfirm }: Props) => {
  return (
    <Portal>
      <Dialog visible={visibleModal} dismissable={false}>
        <Dialog.Title>Confirmation</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">
            Are you sure you want to delete this item?
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onCancel}>Cancel</Button>
          <Button onPress={onConfirm}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ConfirmDialogue;
