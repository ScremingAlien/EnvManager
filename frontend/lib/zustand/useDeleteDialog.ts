import { create } from "zustand"

type DeleteTarget = {
  id: string
  type: "ENV" | "PROJECT"
}

type DeleteDialogStore = {
  open: boolean
  target: DeleteTarget | null
  openDialog: (target: DeleteTarget) => void
  closeDialog: () => void
}

export const useDeleteDialog = create<DeleteDialogStore>((set) => ({
  open: false,
  target: null,

  openDialog: (target) =>
    set({
      open: true,
      target,
    }),

  closeDialog: () =>
    set({
      open: false,
      target: null,
    }),
}))
