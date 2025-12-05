import { useState } from 'react';
import { Menu } from 'lucide-react';
import { ComponentLibrarySidebar, SidebarContent } from './components/ComponentLibrarySidebar';
import { ComponentGrid } from './components/ComponentGrid';
import { ComponentDetail } from './components/ComponentDetail';
import { AccordionPreview } from './components/examples/AccordionPreview';
import { TabsPreview } from './components/examples/TabsPreview';
import { TooltipPreview } from './components/examples/TooltipPreview';
import { DialogPreview } from './components/examples/DialogPreview';
import { ButtonPreview } from './components/examples/ButtonPreview';
import { StreamingHeroPreview } from './components/examples/StreamingHeroPreview';
import { InteractiveAccordion, accordionCode } from './components/interactive/InteractiveAccordion';
import { InteractiveTabs, tabsCode } from './components/interactive/InteractiveTabs';
import { InteractiveDialog, dialogCode } from './components/interactive/InteractiveDialog';
import { InteractiveButton, buttonCode } from './components/interactive/InteractiveButton';
import { LightBeam, ControlPanelDots, CinematicBar } from './components/VisualMotifs';
import { Sheet, SheetContent, SheetTrigger } from './components/ui/sheet';
import { Button } from './components/ui/button';

export default function App() {
  const [activeView, setActiveView] = useState<'grid' | 'detail'>('grid');
  const [activeComponent, setActiveComponent] = useState('general');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const components = [
    {
      id: 'accordion',
      title: 'Accordion',
      description: 'A vertically stacked set of interactive headings.',
      preview: <AccordionPreview />,
    },
    {
      id: 'button',
      title: 'Button',
      description: 'Interactive button component with multiple variants.',
      preview: <ButtonPreview />,
    },
    {
      id: 'tabs',
      title: 'Tabs',
      description: 'Organize and allow navigation between groups of content.',
      preview: <TabsPreview />,
    },
    {
      id: 'tooltip',
      title: 'Tooltip',
      description: 'A popup that displays information related to an element.',
      preview: <TooltipPreview />,
    },
    {
      id: 'dialog',
      title: 'Dialog',
      description: 'A window overlaid on either the primary window or another dialog.',
      preview: <DialogPreview />,
    },
    {
      id: 'modal',
      title: 'Modal',
      description: 'A dialog that appears on top of the app\'s content.',
      preview: <DialogPreview />,
    },
    {
      id: 'pagination',
      title: 'Pagination',
      description: 'Navigate through pages of content.',
      preview: <div className="flex gap-2">
        <div className="w-8 h-8 bg-spotlight-blue rounded" />
        <div className="w-8 h-8 bg-cable-steel rounded" />
        <div className="w-8 h-8 bg-cable-steel rounded" />
      </div>,
    },
    {
      id: 'breadcrumb',
      title: 'Breadcrumb',
      description: 'Display the current page location within a hierarchy.',
      preview: <div className="flex items-center gap-2 text-xs">
        <div className="h-2 w-12 bg-ghost-white/30 rounded" />
        <div className="text-muted-foreground">/</div>
        <div className="h-2 w-12 bg-ghost-white/30 rounded" />
        <div className="text-muted-foreground">/</div>
        <div className="h-2 w-12 bg-spotlight-blue/50 rounded" />
      </div>,
    },
    {
      id: 'stepper',
      title: 'Stepper',
      description: 'Display progress through numbered steps.',
      preview: <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-laser-green flex items-center justify-center text-xs">✓</div>
        <div className="flex-1 h-0.5 bg-spotlight-blue" />
        <div className="w-8 h-8 rounded-full bg-spotlight-blue border-2 border-spotlight-blue" />
        <div className="flex-1 h-0.5 bg-cable-steel" />
        <div className="w-8 h-8 rounded-full bg-cable-steel" />
      </div>,
    },
    {
      id: 'radio-group',
      title: 'Radio Group',
      description: 'Allow users to select a single option from a set.',
      preview: <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-spotlight-blue bg-spotlight-blue" />
          <div className="h-2 w-16 bg-ghost-white/30 rounded" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-cable-steel" />
          <div className="h-2 w-16 bg-ghost-white/30 rounded" />
        </div>
      </div>,
    },
    {
      id: 'checkbox-group',
      title: 'Checkbox Group',
      description: 'Allow users to select multiple options from a set.',
      preview: <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-spotlight-blue bg-spotlight-blue" />
          <div className="h-2 w-16 bg-ghost-white/30 rounded" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-cable-steel" />
          <div className="h-2 w-16 bg-ghost-white/30 rounded" />
        </div>
      </div>,
    },
    {
      id: 'combobox',
      title: 'Combobox',
      description: 'A searchable dropdown with ARIA support.',
      preview: <div className="w-full max-w-xs">
        <div className="px-3 py-2 bg-cable-steel border border-spotlight-blue rounded flex justify-between items-center">
          <div className="h-2 w-20 bg-ghost-white/30 rounded" />
          <div className="w-3 h-3 border-r-2 border-b-2 border-ghost-white/50 transform rotate-45" />
        </div>
      </div>,
    },
    {
      id: 'table',
      title: 'Table',
      description: 'Display data in rows and columns.',
      preview: <div className="w-full space-y-1">
        <div className="flex gap-2">
          <div className="flex-1 h-6 bg-spotlight-blue/30 rounded" />
          <div className="flex-1 h-6 bg-spotlight-blue/30 rounded" />
          <div className="flex-1 h-6 bg-spotlight-blue/30 rounded" />
        </div>
        <div className="flex gap-2">
          <div className="flex-1 h-6 bg-cable-steel/50 rounded" />
          <div className="flex-1 h-6 bg-cable-steel/50 rounded" />
          <div className="flex-1 h-6 bg-cable-steel/50 rounded" />
        </div>
        <div className="flex gap-2">
          <div className="flex-1 h-6 bg-cable-steel/50 rounded" />
          <div className="flex-1 h-6 bg-cable-steel/50 rounded" />
          <div className="flex-1 h-6 bg-cable-steel/50 rounded" />
        </div>
      </div>,
    },
    {
      id: 'carousel',
      title: 'Carousel',
      description: 'Display a collection of items in a scrollable view.',
      preview: <div className="flex gap-2 overflow-hidden">
        <div className="w-24 h-16 bg-dim-violet/50 rounded flex-shrink-0" />
        <div className="w-24 h-16 bg-spotlight-blue/50 rounded flex-shrink-0" />
        <div className="w-24 h-16 bg-scene-amber/50 rounded flex-shrink-0" />
      </div>,
    },
    {
      id: 'toast',
      title: 'Toast',
      description: 'Brief notification messages.',
      preview: <div className="w-64 p-3 bg-laser-green/20 border border-laser-green rounded-lg flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-laser-green" />
        <div className="flex-1">
          <div className="h-2 w-20 bg-ghost-white/40 rounded mb-1" />
          <div className="h-1.5 w-32 bg-ghost-white/30 rounded" />
        </div>
      </div>,
    },
    {
      id: 'streaming-hero',
      title: 'Hero',
      description: 'Large promotional banner for featured content.',
      preview: <StreamingHeroPreview />,
    },
    {
      id: 'streaming-cards',
      title: 'Cards',
      description: 'Content cards for movies and shows.',
      preview: <div className="grid grid-cols-2 gap-2">
        <div className="aspect-[2/3] bg-dim-violet/50 rounded" />
        <div className="aspect-[2/3] bg-spotlight-blue/50 rounded" />
      </div>,
    },
    {
      id: 'streaming-rails',
      title: 'Rails',
      description: 'Horizontal scrolling content rows.',
      preview: <div className="space-y-2">
        <div className="h-2 w-16 bg-ghost-white/40 rounded" />
        <div className="flex gap-2">
          <div className="w-16 h-10 bg-scene-amber/50 rounded" />
          <div className="w-16 h-10 bg-spotlight-blue/50 rounded" />
          <div className="w-16 h-10 bg-dim-violet/50 rounded" />
        </div>
      </div>,
    },
    {
      id: 'streaming-previews',
      title: 'Previews',
      description: 'Hover preview cards with auto-play.',
      preview: <div className="w-40 bg-rig-gray rounded overflow-hidden border border-spotlight-blue">
        <div className="aspect-video bg-gradient-to-br from-spotlight-blue/30 to-dim-violet/30" />
        <div className="p-2 space-y-1">
          <div className="h-2 w-full bg-ghost-white/30 rounded" />
          <div className="h-1.5 w-3/4 bg-ghost-white/20 rounded" />
        </div>
      </div>,
    },
  ];

  const handleSelectComponent = (id: string) => {
    setActiveComponent(id);
    if (id === 'general') {
      setActiveView('grid');
    } else {
      setActiveView('detail');
    }
    // Close mobile sidebar on selection
    setIsMobileOpen(false);
  };

  const renderDetailView = () => {
    switch (activeComponent) {
      case 'accordion':
        return (
          <ComponentDetail
            title="Accordion"
            description="A component that organizes and allows navigation between groups of content that are related and at the same level of hierarchy."
            examples={[
              {
                title: 'Basic Accordion',
                description: 'A simple accordion with multiple panels. Only one panel can be open at a time.',
                preview: <InteractiveAccordion />,
                code: accordionCode,
              },
            ]}
            accessibilityNotes={[
              'Uses proper ARIA attributes including aria-expanded, aria-controls, and aria-labelledby',
              'Keyboard navigation with Tab to move between headers and Enter/Space to toggle panels',
              'Each panel is associated with its header using unique IDs',
              'Screen readers announce the expanded/collapsed state',
              'Focus management ensures logical tab order',
            ]}
            ariaAttributes={[
              {
                attribute: 'aria-expanded="true|false"',
                description: 'Indicates whether the accordion panel is expanded or collapsed',
              },
              {
                attribute: 'aria-controls="panel-id"',
                description: 'Links the button to the panel it controls',
              },
              {
                attribute: 'role="region"',
                description: 'Defines the panel as a significant region of content',
              },
              {
                attribute: 'aria-labelledby="header-id"',
                description: 'Associates the panel with its header button',
              },
            ]}
          />
        );

      case 'button':
        return (
          <ComponentDetail
            title="Button"
            description="Displays a button or a component that looks like a button."
            examples={[
              {
                title: 'Button Variants',
                description: 'Common button styles for different actions and emphasis levels.',
                preview: <InteractiveButton />,
                code: buttonCode,
              },
            ]}
            accessibilityNotes={[
              'Uses native <button> element or role="button"',
              'Focusable via Tab key',
              'Supports Enter/Space to activate',
              'Disabled state prevents interaction and is announced by screen readers',
            ]}
            ariaAttributes={[
              {
                attribute: 'aria-disabled="true"',
                description: 'Indicates that the button is disabled',
              },
              {
                attribute: 'aria-pressed="true|false"',
                description: 'For toggle buttons, indicates pressed state',
              },
            ]}
          />
        );
      
      case 'tabs':
        return (
          <ComponentDetail
            title="Tabs"
            description="A component that organizes and allows navigation between groups of content that are related and at the same level of hierarchy."
            examples={[
              {
                title: 'Horizontal Tabs',
                description: 'Standard horizontal tab navigation with accessible keyboard controls.',
                preview: <InteractiveTabs />,
                code: tabsCode,
              },
            ]}
            accessibilityNotes={[
              'Uses tablist, tab, and tabpanel roles for proper semantics',
              'Keyboard navigation with Arrow keys to move between tabs',
              'Home/End keys to jump to first/last tab',
              'Tab key moves focus into the active panel',
              'aria-selected indicates the active tab',
              'Hidden panels use hidden attribute or aria-hidden',
            ]}
            ariaAttributes={[
              {
                attribute: 'role="tablist"',
                description: 'Container for the tab buttons',
              },
              {
                attribute: 'role="tab"',
                description: 'Individual tab button',
              },
              {
                attribute: 'role="tabpanel"',
                description: 'Content panel associated with a tab',
              },
              {
                attribute: 'aria-selected="true|false"',
                description: 'Indicates which tab is currently selected',
              },
              {
                attribute: 'aria-controls="panel-id"',
                description: 'Links tab to its panel',
              },
            ]}
          />
        );
      
      case 'dialog':
      case 'modal':
        return (
          <ComponentDetail
            title="Dialog Component"
            description="A dialog is a window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
            examples={[
              {
                title: 'Alert Dialog',
                description: 'Use to deliver critical information that requires user acknowledgement. This dialog is modal and blocks interaction with the rest of the application.',
                preview: <InteractiveDialog />,
                code: dialogCode,
              },
            ]}
            accessibilityNotes={[
              'Uses role="dialog" or role="alertdialog" for proper semantics',
              'Focus is trapped within the dialog when open',
              'Escape key closes the dialog',
              'Focus returns to the trigger element when closed',
              'aria-modal="true" indicates content behind is inert',
              'aria-labelledby and aria-describedby provide context',
            ]}
            ariaAttributes={[
              {
                attribute: 'role="dialog"',
                description: 'Identifies the element as a dialog',
              },
              {
                attribute: 'role="alertdialog"',
                description: 'Used for dialogs that contain urgent information',
              },
              {
                attribute: 'aria-modal="true"',
                description: 'Indicates that content behind the dialog is inert',
              },
              {
                attribute: 'aria-labelledby="title-id"',
                description: 'References the dialog title',
              },
              {
                attribute: 'aria-describedby="desc-id"',
                description: 'References the dialog description',
              },
            ]}
          />
        );
      
      default:
        return (
          <div className="max-w-5xl mx-auto relative">
            <LightBeam />
            <div className="text-center py-20 relative z-10">
              <h2 className="text-ghost-white mb-4">Component Details</h2>
              <p className="text-muted-foreground mb-8">
                Select a component from the sidebar to view detailed documentation, interactive examples, and accessibility guidelines.
              </p>
              <CinematicBar className="max-w-md mx-auto" />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-stage-black overflow-hidden">
      <ControlPanelDots />
      
      {/* Desktop Sidebar */}
      <ComponentLibrarySidebar
        activeComponent={activeComponent}
        onSelectComponent={handleSelectComponent}
        collapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      
      {/* Mobile Sidebar Sheet */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="bg-rig-gray border-cable-steel">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-80 bg-rig-gray border-r border-cable-steel">
             <SidebarContent
               activeComponent={activeComponent}
               onSelectComponent={handleSelectComponent}
               collapsed={false}
             />
          </SheetContent>
        </Sheet>
      </div>

      <main className="flex-1 overflow-y-auto relative z-10">
        <div className="p-8 pt-16 md:pt-8">
          {activeView === 'grid' ? (
            <>
              <div className="mb-8 relative">
                <LightBeam className="opacity-50" />
                <div className="relative z-10">
                  <h1 className="text-ghost-white mb-2 text-3xl font-semibold tracking-tight">Components</h1>
                  <p className="text-muted-foreground">
                    Explore our collection of reusable and accessible UI components.
                  </p>
                </div>
              </div>
              
              <CinematicBar className="mb-8" />
              
              <ComponentGrid
                components={components}
                onSelectComponent={handleSelectComponent}
              />
            </>
          ) : (
            renderDetailView()
          )}
        </div>
      </main>
    </div>
  );
}
