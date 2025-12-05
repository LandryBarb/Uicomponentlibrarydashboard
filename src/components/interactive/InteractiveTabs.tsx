import { useState } from 'react';

export function InteractiveTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'account',
      label: 'Account Settings',
      content: 'Manage your account preferences, email notifications, and profile information. Update your personal details and control how you interact with our streaming platform.',
    },
    {
      id: 'playback',
      label: 'Playback',
      content: 'Configure video playback settings including autoplay preferences, subtitle options, and audio language defaults. Customize your viewing experience.',
    },
    {
      id: 'devices',
      label: 'Devices',
      content: 'View and manage all devices connected to your account. Remove unauthorized devices and see your streaming history across different platforms.',
    },
  ];

  return (
    <div className="w-full max-w-2xl">
      <div
        role="tablist"
        aria-label="Settings tabs"
        className="flex gap-1 border-b border-cable-steel"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-3 transition-colors ${
              activeTab === index
                ? 'border-b-2 border-spotlight-blue text-ghost-white'
                : 'text-muted-foreground hover:text-ghost-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`tabpanel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== index}
            className="text-muted-foreground"
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export const tabsCode = `<div>
  <div role="tablist" aria-label="Settings tabs">
    <button
      role="tab"
      aria-selected="true"
      aria-controls="panel-account"
      id="tab-account"
    >
      Account Settings
    </button>
  </div>
  <div
    role="tabpanel"
    id="panel-account"
    aria-labelledby="tab-account"
  >
    Panel content...
  </div>
</div>`;
