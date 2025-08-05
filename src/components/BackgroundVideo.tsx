const BackgroundVideo = () => (
  <div className="fixed inset-0 z-0">
    <video 
      autoPlay 
      muted 
      loop 
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/IPvideocolour.mp4" type="video/mp4" />
      {/* Fallback image */}
      <img 
        src="/lovable-uploads/6fd82ffa-4b90-4b33-a02f-78fc01f5d5e9.png" 
        alt="Modern industrial warehouse"
        className="w-full h-full object-cover"
      />
    </video>
    <div className="absolute inset-0 overlay-gradient"></div>
  </div>
);

export default BackgroundVideo; 