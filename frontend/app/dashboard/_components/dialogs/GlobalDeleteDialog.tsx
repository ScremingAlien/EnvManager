"use client"

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useDeleteDialog } from "@/lib/zustand/useDeleteDialog"
import { toast } from "sonner"

export default function GlobalDeleteDialog() {
  const { open, target, closeDialog } = useDeleteDialog()

  async function handleConfirm() {
    if (!target) return

    switch (target.type) {
      case "ENV":
        toast.success("Env file deleted successfully" + target.id)
        break
      case "PROJECT":
        //    await deleteProject(target.id)
        break
    }

    closeDialog()
  }

  return (
    <Dialog open={open} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <Button variant="outline" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleConfirm}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
