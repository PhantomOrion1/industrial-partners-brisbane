import { basePath } from '@/utils/path';

const ClientLogos = () => {
  const clients = [
    { name: "Kimberly-Clark", logo: `${basePath}Kimberly-Clark_Logo.png`, size: "h-8 md:h-10" },
    { name: "Nestlé", logo: `${basePath}nestle-9-logo-png-transparent.png`, size: "h-12 md:h-20" },
    { name: "PepsiCo", logo: `${basePath}PepsiCo_logo.svg`, size: "h-10 md:h-16" },
    { name: "BP", logo: `${basePath}bp-logo-png-transparent.webp`, size: "h-12 md:h-20" },
    { name: "Bridgestone", logo: `${basePath}Bridgestone-Logo-e1607987001589.webp`, size: "h-10 md:h-16" },
    { name: "Coca-Cola", logo: `${basePath}Coca-Cola-logo.png`, size: "h-10 md:h-16" },
    { name: "Harvey Norman", logo: `${basePath}HarveryNorman-logo-stacked.png`, size: "h-10 md:h-16" },
    { name: "OTIS", logo: `${basePath}2560px-Otis_logo.SVG.png`, size: "h-8 md:h-14" },
    { name: "China CITIC Bank", logo: `${basePath}601998.SS_BIG-0099d861.png`, size: "h-10 md:h-16" },
    { name: "EADS", logo: `${basePath}EADS_logo.svg.png`, size: "h-10 md:h-16" },
    { name: "Energex", logo: `${basePath}Energex_logo.png`, size: "h-10 md:h-16" }
  ];

  // Create a seamless loop by duplicating the array
  const allClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Clients
          </h2>
        </div>
        
        <div className="w-full overflow-hidden">
          <ul className="flex items-center [&_li]:mx-8 md:[&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll-mobile md:animate-infinite-scroll">
            {allClients.map((client, index) => (
              <li key={index} className="flex-shrink-0">
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