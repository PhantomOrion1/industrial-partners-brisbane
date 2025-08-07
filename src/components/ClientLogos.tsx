import { basePath } from '@/utils/path';

const ClientLogos = () => {
  const clients = [
    { name: "China CITIC Bank", logo: `${basePath}601998.SS_BIG-0099d861.png`, size: "h-10 md:h-16" },
    { name: "AGL Energy", logo: `${basePath}AGL_Energy_logo.svg`, size: "h-12 md:h-18" },
    { name: "BCI Bus", logo: `${basePath}BCI_Bus_logo.svg.png`, size: "h-10 md:h-16" },
    { name: "Cleanaway", logo: `${basePath}cleanaway-logo-svg-vector.svg`, size: "h-8 md:h-14" },
    { name: "CPE Capital", logo: `${basePath}CPEcapital (1).png`, size: "h-10 md:h-16" },
    { name: "Opal Australian Paper", logo: `${basePath}opal_australian paper master_purple1_rgb.png`, size: "h-8 md:h-14" },
    { name: "United Heavy", logo: `${basePath}UnitedHeavy (1).png`, size: "h-10 md:h-16" },
    { name: "Veolia", logo: `${basePath}Veolia_logo.svg.png`, size: "h-10 md:h-16" }
  ];

  // Create multiple cycles for seamless infinite loop
  const allClients = [...clients, ...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Clients
          </h2>
        </div>
        
        <div className="relative overflow-hidden">
          <ul className="flex items-center [&_li]:mx-8 md:[&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll-mobile md:animate-infinite-scroll">
            {allClients.map((client, index) => (
              <li key={`${client.name}-${index}`} className="flex-shrink-0">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className={`${client.size} w-auto object-contain transition-all duration-300 opacity-90 hover:opacity-100`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos; 