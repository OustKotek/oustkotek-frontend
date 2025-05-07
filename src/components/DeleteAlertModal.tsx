import React, { useEffect, useRef } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

interface DeleteAlertModalProps {
  showDeleteAlert: boolean;
  setShowDeleteAlert: (open: boolean) => void;
  handleDelete: () => void;
}

const DeleteAlertModal = ({
  showDeleteAlert,
  setShowDeleteAlert,
  handleDelete,
}: DeleteAlertModalProps) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  
  useEffect(() => {
    // Store reference to the trigger button when modal opens
    if (showDeleteAlert) {
      triggerRef.current = document.activeElement as HTMLButtonElement;
    } else if (triggerRef.current) {
      // Return focus to trigger when modal closes
      setTimeout(() => {
        triggerRef.current?.focus();
      }, 0);
    }
  }, [showDeleteAlert]);

  return (
    <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will permanently delete your post. You can't undo this.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>
            Yes, delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlertModal;
