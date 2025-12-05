import { ComponentCard } from './ComponentCard';

interface Component {
  id: string;
  title: string;
  description: string;
  preview?: React.ReactNode;
}

interface ComponentGridProps {
  components: Component[];
  onSelectComponent: (id: string) => void;
}

export function ComponentGrid({ components, onSelectComponent }: ComponentGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {components.map((component) => (
        <ComponentCard
          key={component.id}
          title={component.title}
          description={component.description}
          preview={component.preview}
          onClick={() => onSelectComponent(component.id)}
        />
      ))}
    </div>
  );
}
