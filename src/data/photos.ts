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
  'hero-crew-meter-center': 'Turnpike Electric crew rebuilding a commercial meter center',
  'hero-hardhats-switchgear': 'Two Turnpike Electric electricians in hard hats at commercial panels',
  'hero-team-yard': 'Turnpike Electric team inspecting a job on site',
  'electrical-room': 'Commercial electrical room with meter centers and switchgear',
  'generators-generac': 'Row of standby generators and transfer switch cabinets with conduit runs',
  'pump-station': 'Pump station building with electrical service',
  'tower-climb': 'Turnpike Electric technician in a safety harness working on a telecom tower',
  'industrial-rail-plant': 'Crew working on electrical equipment at an industrial rail facility',
  'warehouse-buildout-crew': 'Crew in hard hats running underground conduit in a warehouse build-out',
  'ups-install-crew': 'Turnpike Electric electricians installing a large UPS system',
  'electrical-room-finished': 'Finished electrical room with panels and a bank of conduit risers',
  'switchboard-crew': 'Turnpike Electric electricians wiring a commercial switchboard',
  'panel-wall-conduit': 'New panel wall with neatly run EMT conduit',
  'crew-telecom-room': 'Turnpike Electric crew installing telecom power equipment',
  'ups-room': 'UPS and switchgear room installed by Turnpike Electric',
  'fleet-vans': 'Turnpike Electric work van and pickup truck',
  'learning-nest-preschool': 'The Learning Nest Montessori preschool building in Miami',
  'arc-flash-safety': 'Electrician in arc-flash protective gear operating switchgear',
  'lewis-landing-park': 'Lewis Landing Park riverwalk in Broward County',
  'condo-pool': 'Condominium pool deck with lighting',
  'condo-night': 'Mid-rise condominium building at night with illuminated facade',
  'monticello-oceanside': 'Monticello and Oceanside hotel entrance in Miami Beach',
  'mt-vernon-before-after': 'Mt. Vernon hotel in Miami Beach before and after renovation',
  'meter-center-lift': 'Crew on a lift installing a large meter center on a commercial building',
  'miami-beach-womans-club': 'Miami Beach Woman\'s Club building and lawn',
  'satellite-dish': 'Technician working on a large satellite dish',
  'monticello-street': 'The Monticello hotel in Miami Beach',
  'retail-market': 'Retail market interior with refrigerated cases and lighting',
  'underground-trench-crew': 'Crew laying multiple underground conduits in a trench',
  'event-hall': 'Event hall with chandeliers and lighting',
  'restaurant-dining': 'Restaurant dining room with feature lighting',
  'hero-telecom-crew': 'Turnpike Electric crew installing telecom power equipment in a commercial electrical room',
  'hero-generators': 'Row of standby generators and transfer switches installed by Turnpike Electric',
  'hero-monticello': 'The Monticello hotel in Miami Beach',
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

// Home hero background. Swap for a better (or generated) wide image when available.
export const heroPhoto = { name: 'hero-telecom-crew', position: '100% 50%', mobilePosition: '76% 50%' };

// Order for the project gallery: strongest first.
export const galleryOrder = [
  'crew-telecom-room',
  'switchboard-crew',
  'meter-center-lift',
  'ups-install-crew',
  'generators-generac',
  'underground-trench-crew',
  'electrical-room-finished',
  'tower-climb',
  'panel-wall-conduit',
  'ups-room',
  'warehouse-buildout-crew',
  'satellite-dish',
  'arc-flash-safety',
  'industrial-rail-plant',
  'hero-team-yard',
  'interior-lighting-ladder',
];
