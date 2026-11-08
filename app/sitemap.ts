import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://johnrenz.vercel.app';

  const routes = [
    { path: '', priority: 1 },
    { path: '/work', priority: 0.9 },
    { path: '/about', priority: 0.8 },
    { path: '/experience', priority: 0.8 },
    { path: '/stack', priority: 0.8 },
    { path: '/Journey', priority: 0.8 },
    { path: '/resources', priority: 0.7 },
    { path: '/community', priority: 0.7 },
    { path: '/network', priority: 0.6 },
    { path: '/contact', priority: 0.9 },
    { path: '/Gallery', priority: 0.6 },
    { path: '/Resume', priority: 0.7 },
    { path: '/Groove', priority: 0.7 },
    { path: '/Reefer', priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}
