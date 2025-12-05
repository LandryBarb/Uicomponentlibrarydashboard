import exampleImage from 'figma:asset/d7eeab779ee87ee7fb23ec4a6e865ae8d8a6b6d9.png';

export function StreamingHeroPreview() {
  return (
    <div className="relative w-full h-full">
      <img 
        src={exampleImage} 
        alt="Streaming hero preview" 
        className="w-full h-full object-cover rounded opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stage-black via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <div className="h-4 w-3/4 bg-ghost-white/80 rounded mb-2" />
        <div className="h-2 w-1/2 bg-ghost-white/50 rounded" />
      </div>
    </div>
  );
}
