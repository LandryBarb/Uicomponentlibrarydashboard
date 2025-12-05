import { Button } from '../ui/button';
import { MonitorPlay, Play, Plus, Settings, Trash, ChevronRight } from 'lucide-react';

export const buttonCode = `import { Button } from "@/components/ui/button"
import { Play, Settings, Trash } from "lucide-react"

export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      
      <div className="flex flex-wrap gap-4">
        <Button size="lg">Large Button</Button>
        <Button size="default">Default Button</Button>
        <Button size="sm">Small</Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button>
          <Play className="mr-2 h-4 w-4" /> Play Movie
        </Button>
        <Button variant="secondary">
          <Settings className="mr-2 h-4 w-4" /> Settings
        </Button>
        <Button variant="destructive" size="icon">
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
`;

export function InteractiveButton() {
  return (
    <div className="p-6 space-y-8 border border-cable-steel rounded-lg bg-rig-gray/50">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-ghost-white">Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-ghost-white">Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="lg">Large Button</Button>
          <Button size="default">Default Button</Button>
          <Button size="sm">Small</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-ghost-white">With Icons</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button className="bg-spotlight-blue hover:bg-spotlight-blue/90">
            <Play className="mr-2 h-4 w-4 fill-current" /> 
            Watch Now
          </Button>
          <Button variant="secondary">
            <Plus className="mr-2 h-4 w-4" /> 
            Add to List
          </Button>
          <Button variant="outline">
            More Info
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-ghost-white">Cinematic Context</h3>
        <div className="flex flex-wrap items-center gap-4 p-6 bg-stage-black rounded-lg border border-cable-steel relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-spotlight-blue/10 to-transparent pointer-events-none" />
           <Button className="z-10 shadow-[0_0_15px_rgba(66,165,245,0.5)] hover:shadow-[0_0_25px_rgba(66,165,245,0.7)] transition-all duration-300">
             <MonitorPlay className="mr-2 h-4 w-4" />
             Start Streaming
           </Button>
           <Button variant="ghost" className="z-10 text-muted-foreground hover:text-ghost-white">
             Cancel
           </Button>
        </div>
      </div>
    </div>
  );
}
