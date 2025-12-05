import { Search, Grid3x3, MonitorPlay, HelpCircle, Settings, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { cn } from './ui/utils';
import { Button } from './ui/button';

interface ComponentLibrarySidebarProps {
  activeComponent: string;
  onSelectComponent: (component: string) => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  className?: string;
}

export function SidebarContent({ 
  activeComponent, 
  onSelectComponent,
  collapsed = false
}: { 
  activeComponent: string;
  onSelectComponent: (component: string) => void;
  collapsed?: boolean;
}) {
  const components = [
    { id: 'accordion', label: 'Accordion', category: 'general' },
    { id: 'button', label: 'Button', category: 'general' },
    { id: 'tabs', label: 'Tabs', category: 'general' },
    { id: 'tooltip', label: 'Tooltip', category: 'general' },
    { id: 'dialog', label: 'Dialog', category: 'general' },
    { id: 'modal', label: 'Modal', category: 'general' },
    { id: 'pagination', label: 'Pagination', category: 'navigation' },
    { id: 'breadcrumb', label: 'Breadcrumb', category: 'navigation' },
    { id: 'stepper', label: 'Stepper', category: 'navigation' },
    { id: 'radio-group', label: 'Radio Group', category: 'data-entry' },
    { id: 'checkbox-group', label: 'Checkbox Group', category: 'data-entry' },
    { id: 'combobox', label: 'Combobox', category: 'data-entry' },
    { id: 'table', label: 'Table', category: 'data-display' },
    { id: 'carousel', label: 'Carousel', category: 'data-display' },
    { id: 'toast', label: 'Toast', category: 'feedback' },
    { id: 'streaming-hero', label: 'Hero', category: 'streaming' },
    { id: 'streaming-cards', label: 'Cards', category: 'streaming' },
    { id: 'streaming-rails', label: 'Rails', category: 'streaming' },
    { id: 'streaming-previews', label: 'Previews', category: 'streaming' },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className={cn("p-6 border-b border-cable-steel", collapsed && "p-4")}>
        <div className={cn("flex items-center gap-3 mb-4", collapsed && "justify-center mb-0")}>
          <div className="w-10 h-10 rounded-full bg-spotlight-blue flex items-center justify-center flex-shrink-0">
            <MonitorPlay className="w-5 h-5 text-ghost-white" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <h2 className="text-ghost-white whitespace-nowrap">Component Library</h2>
              <p className="text-xs text-muted-foreground whitespace-nowrap">Design System</p>
            </div>
          )}
        </div>
        
        {/* Search */}
        {!collapsed && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Find a component..."
              className="w-full pl-9 pr-3 py-2 bg-cable-steel border border-cable-steel rounded-lg text-sm text-ghost-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-spotlight-blue"
            />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        <nav className="space-y-1">
          {/* General Category */}
          <button
            onClick={() => onSelectComponent('general')}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
              activeComponent === 'general'
                ? 'bg-spotlight-blue text-ghost-white'
                : 'text-ghost-white hover:bg-cable-steel',
              collapsed && "justify-center px-2"
            )}
            title={collapsed ? "General" : undefined}
          >
            <Grid3x3 className="w-4 h-4 flex-shrink-0" />
            {!collapsed && <span className="text-sm">General</span>}
          </button>

          {/* Components List */}
          {components.map((component) => (
            <button
              key={component.id}
              onClick={() => onSelectComponent(component.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                activeComponent === component.id
                  ? 'bg-spotlight-blue text-ghost-white'
                  : 'text-muted-foreground hover:bg-cable-steel hover:text-ghost-white',
                !collapsed && "pl-10",
                collapsed && "justify-center px-2"
              )}
              title={collapsed ? component.label : undefined}
            >
              {!collapsed ? (
                component.label
              ) : (
                <div className="w-1.5 h-1.5 rounded-full bg-current" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-cable-steel space-y-1">
        <button 
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-cable-steel hover:text-ghost-white transition-colors",
            collapsed && "justify-center"
          )}
          title={collapsed ? "Help" : undefined}
        >
          <HelpCircle className="w-4 h-4 flex-shrink-0" />
          {!collapsed && <span className="text-sm">Help</span>}
        </button>
        <button 
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-cable-steel hover:text-ghost-white transition-colors",
            collapsed && "justify-center"
          )}
          title={collapsed ? "Settings" : undefined}
        >
          <Settings className="w-4 h-4 flex-shrink-0" />
          {!collapsed && <span className="text-sm">Settings</span>}
        </button>
      </div>
    </div>
  );
}

export function ComponentLibrarySidebar({ 
  activeComponent, 
  onSelectComponent,
  collapsed = false,
  onToggleCollapse,
  className 
}: ComponentLibrarySidebarProps) {
  return (
    <div 
      className={cn(
        "bg-rig-gray border-r border-cable-steel h-screen flex-col transition-all duration-300 hidden md:flex relative",
        collapsed ? "w-20" : "w-64",
        className
      )}
    >
      <SidebarContent 
        activeComponent={activeComponent} 
        onSelectComponent={onSelectComponent}
        collapsed={collapsed}
      />
      
      {onToggleCollapse && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-3 top-20 h-6 w-6 rounded-full border border-cable-steel bg-rig-gray text-muted-foreground shadow-sm hover:bg-spotlight-blue hover:text-ghost-white z-50"
          onClick={onToggleCollapse}
        >
          {collapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
        </Button>
      )}
    </div>
  );
}
