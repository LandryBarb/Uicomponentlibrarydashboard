export function DialogPreview() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-48 bg-rig-gray rounded-lg border-2 border-spotlight-blue shadow-xl p-4">
        <div className="h-3 w-24 bg-ghost-white/40 rounded mb-3" />
        <div className="space-y-2 mb-4">
          <div className="h-2 w-full bg-ghost-white/20 rounded" />
          <div className="h-2 w-3/4 bg-ghost-white/20 rounded" />
        </div>
        <div className="flex gap-2 justify-end">
          <div className="h-6 w-12 bg-cable-steel rounded" />
          <div className="h-6 w-12 bg-spotlight-blue rounded" />
        </div>
      </div>
    </div>
  );
}
