import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function InteractiveAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: 'What streaming quality options are available?',
      content: 'We offer multiple streaming quality options including 4K Ultra HD, 1080p Full HD, and 720p HD. The quality automatically adjusts based on your internet connection speed to provide the best viewing experience.',
    },
    {
      title: 'How many devices can stream simultaneously?',
      content: 'Depending on your subscription plan, you can stream on 1 to 4 devices simultaneously. Premium plans offer unlimited device streaming for the whole family.',
    },
    {
      title: 'Can I download content for offline viewing?',
      content: 'Yes! Premium subscribers can download select titles to watch offline on mobile devices and tablets. Downloaded content is available for 30 days.',
    },
  ];

  return (
    <div className="w-full max-w-2xl space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-rig-gray border border-cable-steel rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-cable-steel/50 transition-colors"
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
            id={`accordion-header-${index}`}
          >
            <span className="text-ghost-white">{item.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div
              id={`accordion-content-${index}`}
              role="region"
              aria-labelledby={`accordion-header-${index}`}
              className="px-4 pb-4 text-muted-foreground"
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export const accordionCode = `<div role="region" aria-label="FAQ Accordion">
  <div>
    <button
      aria-expanded="true"
      aria-controls="panel-1"
      id="accordion-header-1"
    >
      What streaming quality options are available?
    </button>
    <div 
      id="panel-1"
      role="region"
      aria-labelledby="accordion-header-1"
    >
      We offer multiple streaming quality options...
    </div>
  </div>
</div>`;
