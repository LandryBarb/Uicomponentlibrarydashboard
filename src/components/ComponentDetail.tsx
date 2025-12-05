import { useState } from 'react';
import { ChevronDown, ChevronUp, Copy, Check, Code, Accessibility, FileText } from 'lucide-react';
import { CinematicBar } from './VisualMotifs';

interface ComponentDetailProps {
  title: string;
  description: string;
  examples: {
    title: string;
    description: string;
    preview: React.ReactNode;
    code: string;
  }[];
  accessibilityNotes: string[];
  ariaAttributes?: {
    attribute: string;
    description: string;
  }[];
}

export function ComponentDetail({ title, description, examples, accessibilityNotes, ariaAttributes }: ComponentDetailProps) {
  const [expandedCode, setExpandedCode] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [expandedA11y, setExpandedA11y] = useState<string | null>(null);

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <span>Component Library</span>
        <span>/</span>
        <span>Navigation</span>
        <span>/</span>
        <span className="text-ghost-white">{title}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-ghost-white mb-3">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Interactive Examples */}
      <section className="mb-12">
        <h2 className="text-ghost-white mb-6">Interactive Examples</h2>
        
        <div className="space-y-6">
          {examples.map((example, index) => (
            <div key={index} className="bg-rig-gray border border-cable-steel rounded-lg overflow-hidden">
              {/* Example Header */}
              <div className="p-6 border-b border-cable-steel">
                <h3 className="text-ghost-white mb-2">{example.title}</h3>
                <p className="text-sm text-muted-foreground">{example.description}</p>
              </div>

              {/* Preview */}
              <div className="p-8 bg-cable-steel/30">
                {example.preview}
              </div>

              {/* Code Section */}
              <div className="border-t border-cable-steel">
                <button
                  onClick={() => setExpandedCode(expandedCode === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-spotlight-blue hover:bg-cable-steel/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    <span className="text-sm">
                      {expandedCode === index ? 'Hide' : 'Show'} code snippet
                    </span>
                  </div>
                  {expandedCode === index ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {expandedCode === index && (
                  <div className="relative">
                    <button
                      onClick={() => handleCopy(example.code, index)}
                      className="absolute top-4 right-4 p-2 bg-cable-steel hover:bg-spotlight-blue rounded transition-colors"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-4 h-4 text-laser-green" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <pre className="p-6 bg-stage-black overflow-x-auto">
                      <code className="text-sm text-ghost-white">{example.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CinematicBar className="mb-12" />

      {/* Documentation */}
      <section className="mb-12">
        <h2 className="text-ghost-white mb-6">Documentation</h2>
        
        <div className="space-y-4">
          {/* Semantic Markup */}
          <div className="bg-rig-gray border border-cable-steel rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedA11y(expandedA11y === 'semantic' ? null : 'semantic')}
              className="w-full flex items-center justify-between p-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-spotlight-blue/20 flex items-center justify-center">
                  <Code className="w-5 h-5 text-spotlight-blue" />
                </div>
                <div className="text-left">
                  <h3 className="text-ghost-white">Full Semantic Enterprise Level Markup</h3>
                  <p className="text-sm text-muted-foreground">Click to expand and view the complete code snippet.</p>
                </div>
              </div>
              {expandedA11y === 'semantic' ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
            
            {expandedA11y === 'semantic' && (
              <div className="border-t border-cable-steel p-6 bg-stage-black">
                <p className="text-sm text-muted-foreground mb-4">
                  This component provides a fully accessible and reusable system. It manages state internally and uses dynamic IDs to link elements with their corresponding panels, ensuring compliance with ARIA standards.
                </p>
                <pre className="p-4 bg-cable-steel/30 rounded overflow-x-auto">
                  <code className="text-sm text-ghost-white">{examples[0]?.code || '// Code example'}</code>
                </pre>
              </div>
            )}
          </div>

          {/* Accessibility Implementation */}
          <div className="bg-rig-gray border border-cable-steel rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedA11y(expandedA11y === 'a11y' ? null : 'a11y')}
              className="w-full flex items-center justify-between p-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-dim-violet/20 flex items-center justify-center">
                  <Accessibility className="w-5 h-5 text-dim-violet" />
                </div>
                <div className="text-left">
                  <h3 className="text-ghost-white">Complete Accessibility Implementation</h3>
                  <p className="text-sm text-muted-foreground">Detailed breakdown of ARIA roles and attributes.</p>
                </div>
              </div>
              {expandedA11y === 'a11y' ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
            
            {expandedA11y === 'a11y' && (
              <div className="border-t border-cable-steel p-6">
                <div className="space-y-4">
                  {accessibilityNotes.map((note, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-laser-green mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{note}</p>
                    </div>
                  ))}
                </div>

                {ariaAttributes && ariaAttributes.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-cable-steel">
                    <h4 className="text-ghost-white mb-4">ARIA Attributes</h4>
                    <div className="space-y-3">
                      {ariaAttributes.map((attr, index) => (
                        <div key={index} className="bg-cable-steel/30 p-4 rounded-lg">
                          <code className="text-sm text-spotlight-blue">{attr.attribute}</code>
                          <p className="text-sm text-muted-foreground mt-1">{attr.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Legal Compliance */}
          <div className="bg-rig-gray border border-cable-steel rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedA11y(expandedA11y === 'legal' ? null : 'legal')}
              className="w-full flex items-center justify-between p-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-scene-amber/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-scene-amber" />
                </div>
                <div className="text-left">
                  <h3 className="text-ghost-white">ADA and Legal Compliance Enhancement</h3>
                  <p className="text-sm text-muted-foreground">Key considerations for meeting legal accessibility standards.</p>
                </div>
              </div>
              {expandedA11y === 'legal' ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
            
            {expandedA11y === 'legal' && (
              <div className="border-t border-cable-steel p-6">
                <p className="text-sm text-muted-foreground">
                  This component is designed to meet WCAG 2.1 Level AA standards and ADA compliance requirements. It includes proper keyboard navigation, screen reader support, and follows ARIA best practices to ensure equal access for all users.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
