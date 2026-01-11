import { createClient } from 'next-sanity';

const clientConfig = createClient({
  projectId: process.env.SANITY_CLIENT_CONFIG || '',
  dataset: 'production',
  apiVersion: '2026-01-06',
  useCdn: true,
});

export default clientConfig;
