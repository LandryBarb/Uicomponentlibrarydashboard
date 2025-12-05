import { useState } from 'react';
import { X, AlertTriangle, CheckCircle, Info } from 'lucide-react';

type DialogType = 'alert' | 'confirmation' | 'form';

export function InteractiveDialog() {
  const [openDialog, setOpenDialog] = useState<DialogType | null>(null);

  const AlertDialog = () => (
    <div className="fixed inset-0 bg-stage-black/80 flex items-center justify-center p-4 z-50">
      <div
        role="alertdialog"
        aria-labelledby="alert-title"
        aria-describedby="alert-description"
        className="bg-rig-gray border border-caution-red rounded-lg max-w-md w-full p-6"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-caution-red/20 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-caution-red" />
          </div>
          <div className="flex-1">
            <h2 id="alert-title" className="text-ghost-white mb-2">Critical Alert</h2>
            <p id="alert-description" className="text-sm text-muted-foreground mb-4">
              Use to deliver critical information that requires user acknowledgement. This dialog is modal and blocks interaction with the rest of the application.
            </p>
            <button
              onClick={() => setOpenDialog(null)}
              className="px-4 py-2 bg-spotlight-blue text-ghost-white rounded hover:bg-spotlight-blue/80 transition-colors"
            >
              Acknowledge
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ConfirmationDialog = () => (
    <div className="fixed inset-0 bg-stage-black/80 flex items-center justify-center p-4 z-50">
      <div
        role="dialog"
        aria-labelledby="confirm-title"
        aria-describedby="confirm-description"
        className="bg-rig-gray border border-cable-steel rounded-lg max-w-md w-full p-6"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-scene-amber/20 flex items-center justify-center flex-shrink-0">
            <Info className="w-6 h-6 text-scene-amber" />
          </div>
          <div className="flex-1">
            <h2 id="confirm-title" className="text-ghost-white mb-2">Confirmation Dialog</h2>
            <p id="confirm-description" className="text-sm text-muted-foreground mb-4">
              Confirmation dialogs require users to explicitly confirm a choice before an action is committed. For example, deleting a file.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setOpenDialog(null)}
                className="px-4 py-2 bg-cable-steel text-ghost-white rounded hover:bg-cable-steel/80 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpenDialog(null)}
                className="px-4 py-2 bg-spotlight-blue text-ghost-white rounded hover:bg-spotlight-blue/80 transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const FormDialog = () => (
    <div className="fixed inset-0 bg-stage-black/80 flex items-center justify-center p-4 z-50">
      <div
        role="dialog"
        aria-labelledby="form-title"
        className="bg-rig-gray border border-cable-steel rounded-lg max-w-md w-full"
      >
        <div className="flex items-center justify-between p-6 border-b border-cable-steel">
          <h2 id="form-title" className="text-ghost-white">Complex Modal</h2>
          <button
            onClick={() => setOpenDialog(null)}
            aria-label="Close dialog"
            className="w-8 h-8 rounded hover:bg-cable-steel transition-colors flex items-center justify-center"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
        <div className="p-6">
          <p className="text-sm text-muted-foreground mb-4">
            Modals can contain more complex content, such as forms for creating or editing data, without navigating away from the current page.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-ghost-white mb-2">
                Title
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-cable-steel border border-cable-steel rounded text-ghost-white focus:ring-2 focus:ring-spotlight-blue focus:outline-none"
                placeholder="Enter title"
              />
            </div>
            <div>
              <label className="block text-sm text-ghost-white mb-2">
                Description
              </label>
              <textarea
                className="w-full px-3 py-2 bg-cable-steel border border-cable-steel rounded text-ghost-white focus:ring-2 focus:ring-spotlight-blue focus:outline-none resize-none"
                rows={3}
                placeholder="Enter description"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-end p-6 border-t border-cable-steel">
          <button
            onClick={() => setOpenDialog(null)}
            className="px-4 py-2 bg-cable-steel text-ghost-white rounded hover:bg-cable-steel/80 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => setOpenDialog(null)}
            className="px-4 py-2 bg-spotlight-blue text-ghost-white rounded hover:bg-spotlight-blue/80 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setOpenDialog('alert')}
          className="px-6 py-3 bg-caution-red text-ghost-white rounded-lg hover:bg-caution-red/80 transition-colors"
        >
          Show Alert Dialog
        </button>
        <button
          onClick={() => setOpenDialog('confirmation')}
          className="px-6 py-3 bg-scene-amber text-stage-black rounded-lg hover:bg-scene-amber/80 transition-colors"
        >
          Show Confirmation
        </button>
        <button
          onClick={() => setOpenDialog('form')}
          className="px-6 py-3 bg-spotlight-blue text-ghost-white rounded-lg hover:bg-spotlight-blue/80 transition-colors"
        >
          Open Form Modal
        </button>
      </div>

      {openDialog === 'alert' && <AlertDialog />}
      {openDialog === 'confirmation' && <ConfirmationDialog />}
      {openDialog === 'form' && <FormDialog />}
    </>
  );
}

export const dialogCode = `<div role="dialog" aria-labelledby="dialog-title" aria-modal="true">
  <h2 id="dialog-title">Dialog Title</h2>
  <p id="dialog-description">Dialog content...</p>
  <button>Close</button>
</div>`;
