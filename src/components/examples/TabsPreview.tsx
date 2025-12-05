export function TabsPreview() {
  return (
    <div className="w-full max-w-md">
      <div className="flex gap-1 border-b border-cable-steel mb-4">
        <div className="px-4 py-2 border-b-2 border-spotlight-blue">
          <div className="h-3 w-16 bg-spotlight-blue/50 rounded" />
        </div>
        <div className="px-4 py-2">
          <div className="h-3 w-16 bg-ghost-white/20 rounded" />
        </div>
        <div className="px-4 py-2">
          <div className="h-3 w-16 bg-ghost-white/20 rounded" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-2 w-full bg-ghost-white/10 rounded" />
        <div className="h-2 w-5/6 bg-ghost-white/10 rounded" />
        <div className="h-2 w-4/6 bg-ghost-white/10 rounded" />
      </div>
    </div>
  );
}
