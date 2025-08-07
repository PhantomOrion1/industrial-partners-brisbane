// Conditionally set base path for different deployment environments
export const basePath = import.meta.env.PROD && !import.meta.env.VITE_VERCEL 
  ? "/industrial-partners-brisbane/" 
  : "/"; 