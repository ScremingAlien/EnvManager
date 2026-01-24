"use client"
import { Button } from "@/components/ui/button"
import { ContextMenuItem } from "@/components/ui/context-menu"
import { useDeleteDialog } from "@/lib/zustand/useDeleteDialog"
import { TrashIcon } from "lucide-react"

type Props = {
     envid: string,
     type: "CONTEXT_ITEM" | "BUTTON"

}

export default function DeleteHandler({ envid, type }: Props) {


     return (
          type == "BUTTON" ?
               <Button variant={'destructive'}
                    onClick={() => {
                         useDeleteDialog.getState().openDialog({
                              id: envid,
                              type: "ENV",
                         })
                    }}
               >Delete</Button>
               :
               <ContextMenuItem
                    variant="destructive"
                    onSelect={(e) => {

                         useDeleteDialog.getState().openDialog({
                              id: envid,
                              type: "ENV",
                         })
                    }}
               >
                    <TrashIcon className="mr-2 h-4 w-4" />
                    Delete
               </ContextMenuItem>
     )
}