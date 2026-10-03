import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'crew-trio-yard': 'Three Turnpike Electric electricians planning a service change on site',
  'crew-trio-yard-2': 'Turnpike Electric crew reviewing an outdoor electrical installation',
  'crew-panel-branded-tee': 'Electricians in Turnpike Electric shirts installing new panels',
  'panel-install-ladder': 'Electrician on a ladder mounting a new electrical panel',
  'mast-conduit-install': 'Electrician installing a service mast and conduit above new panels',
  'mast-panel-ladder': 'New service mast, meter and panel being installed on a block wall',
  'crew-interior-remodel': 'Turnpike Electric electrician at work in a home under renovation',
  'crew-kitchen-smile': 'Smiling electrician on a kitchen remodel',
  'panel-finished-conduit': 'Finished panel with neat conduit runs',
  'renovation-meter-site': 'Electrician working at a meter on a renovation site',
  'meter-hardhat': 'Electrician in a hard hat replacing a meter enclosure cover',
  'underground-trench': 'Electrician running underground feeders in a trench',
  'crew-garden-arch': 'Crew coordinating an underground service run through a garden',
  'service-disconnect': 'Electrician installing a large service disconnect',
  'crew-panel-logo-shirts': 'Two Turnpike Electric electricians wiring a service panel',
  'interior-lighting-ladder': 'Electricians installing pendant lighting in a finished room',
  'hallway-ladder': 'Electrician installing a ceiling device in a hallway',
  'commercial-meter-center': 'Crew rebuilding a multi-meter center on a commercial building',
  'commercial-switchgear': 'Electricians in hard hats working on commercial switchgear',
  'monticello-hotel': 'The Monticello Hotel in Miami Beach, a Turnpike Electric renovation project',
};

export type Photo = { src: ImageMetadata; alt: string; name: string };

export const photos: Record<string, Photo> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => {
    const name = path.split('/').pop()!.replace('.jpg', '');
    return [name, { src: mod.default, alt: alts[name] ?? 'Turnpike Electric at work', name }];
  }),
);

export const photo = (name: string): Photo => {
  const p = photos[name];
  if (!p) throw new Error(`Unknown photo: ${name}`);
  return p;
};

// Order for the project gallery: strongest first.
export const galleryOrder = [
  'commercial-meter-center',
  'crew-panel-logo-shirts',
  'commercial-switchgear',
  'monticello-hotel',
  'mast-panel-ladder',
  'interior-lighting-ladder',
  'service-disconnect',
  'crew-trio-yard',
  'underground-trench',
  'meter-hardhat',
  'crew-kitchen-smile',
  'panel-finished-conduit',
  'crew-garden-arch',
  'hallway-ladder',
  'panel-install-ladder',
];
