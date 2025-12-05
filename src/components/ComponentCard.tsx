import { ArrowRight } from 'lucide-react';

interface ComponentCardProps {
  title: string;
  description: string;
  preview?: React.ReactNode;
  onClick?: () => void;
  accentColor?: string;
}

export function ComponentCard({ title, description, preview, onClick, accentColor = 'spotlight-blue' }: ComponentCardProps) {
  return (
    <div
      onClick={onClick}
      className="group bg-rig-gray border border-cable-steel rounded-lg overflow-hidden hover:border-spotlight-blue transition-all duration-300 cursor-pointer"
    >
      {/* Preview Area */}
      <div className="aspect-video bg-cable-steel flex items-center justify-center p-6 relative overflow-hidden">
        {preview ? (
          preview
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-rig-gray to-cable-steel rounded" />
        )}
        <div className={`absolute inset-0 bg-gradient-to-t from-${accentColor}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-ghost-white mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <button className="inline-flex items-center gap-1 text-sm text-spotlight-blue hover:gap-2 transition-all">
          View Details
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
