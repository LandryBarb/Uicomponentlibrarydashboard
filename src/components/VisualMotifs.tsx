import React from 'react';

export function LightBeam({ className = "" }: { className?: string }) {
  return (
    <div 
      className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-gradient-to-b from-spotlight-blue/20 via-spotlight-blue/5 to-transparent blur-3xl pointer-events-none z-0 ${className}`} 
      aria-hidden="true"
    />
  );
}

export function ControlPanelDots({ className = "" }: { className?: string }) {
  return (
    <div 
      className={`absolute inset-0 opacity-10 pointer-events-none z-0 ${className}`} 
      style={{
        backgroundImage: 'radial-gradient(#42A5F5 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
      aria-hidden="true"
    />
  );
}

export function CinematicBar({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-1 bg-cable-steel relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-spotlight-blue/50 to-transparent animate-pulse" />
    </div>
  );
}
