export function TooltipPreview() {
  return (
    <div className="flex items-center justify-center h-full relative">
      <div className="w-24 h-10 bg-spotlight-blue rounded flex items-center justify-center">
        <div className="h-3 w-16 bg-ghost-white/80 rounded" />
      </div>
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-cable-steel px-3 py-1 rounded text-xs text-ghost-white whitespace-nowrap border border-spotlight-blue/50">
        Tooltip info
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-cable-steel border-r border-b border-spotlight-blue/50" />
      </div>
    </div>
  );
}
