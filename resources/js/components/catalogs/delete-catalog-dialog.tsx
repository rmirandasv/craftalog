import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { destroy } from '@/routes/catalogs';
import { router } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';
import { type ReactNode, useState } from 'react';

type DeleteCatalogDialogProps = {
  catalog: { id: number; name: string };
  onConfirm?: (catalogId: number) => Promise<void> | void;
  trigger?: ReactNode;
};

export default function DeleteCatalogDialog({
  catalog,
  trigger,
}: DeleteCatalogDialogProps) {
  const [deleting, setDeleting] = useState(false);
  const [open, setOpen] = useState(false);

  async function handleConfirm() {
    router.delete(destroy(catalog.id), {
      onStart: () => setDeleting(true),
      onFinish: () => setDeleting(false),
      onSuccess: () => setOpen(false),
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="destructive" size="sm">
            <Trash2 />
            Delete
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete catalog</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the
            catalog "{catalog.name}" and remove its associations.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={handleConfirm}
            disabled={deleting}
          >
            <Trash2 />
            Confirm delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
