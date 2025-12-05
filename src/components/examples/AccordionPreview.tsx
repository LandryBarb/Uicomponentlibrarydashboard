export function AccordionPreview() {
  return (
    <div className="w-full max-w-md space-y-2">
      <div className="bg-rig-gray rounded border border-cable-steel">
        <div className="p-3 border-b border-cable-steel">
          <div className="h-3 w-32 bg-ghost-white/20 rounded" />
        </div>
        <div className="p-3">
          <div className="h-2 w-full bg-ghost-white/10 rounded mb-2" />
          <div className="h-2 w-3/4 bg-ghost-white/10 rounded" />
        </div>
      </div>
      <div className="bg-rig-gray/50 rounded border border-cable-steel/50 p-3">
        <div className="h-3 w-28 bg-ghost-white/10 rounded" />
      </div>
      <div className="bg-rig-gray/50 rounded border border-cable-steel/50 p-3">
        <div className="h-3 w-36 bg-ghost-white/10 rounded" />
      </div>
    </div>
  );
}
