// All site copy and facts live here.
// Only publish contact details the company already uses publicly.

export const company = {
  name: 'Turnpike Electric',
  legalName: 'Turnpike Electric Corp.',
  tagline: 'From Tallahassee to the Keys',
  motto: 'Quality over anything and everything.',
  founded: 2010,
  license: 'EC13004836',
  licenseLabel: 'Florida Certified Electrical Contractor',
  officePhone: '(786) 841-2727',
  officeTel: '+17868412727',
  fieldPhone: '(786) 712-1024',
  fieldTel: '+17867121024',
  website: 'https://www.turnpikelectric.us',
  address: {
    street: '2482 W 80th St, Suite 4',
    city: 'Hialeah',
    region: 'FL',
    zip: '33016',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=2482+W+80th+St+Suite+4+Hialeah+FL+33016',
  angiUrl: 'https://www.angi.com/companylist/us/fl/miami/turnpike-electric-corp-reviews-11205864.htm',
  buildzoomUrl: 'https://www.buildzoom.com/contractor/turnpike-electric-corp',
};

// Web3Forms access key. It is public by design (it only allows sending to the
// email it was created for), so it lives in the source, not in a secret.
export const web3formsKey = '627d27a6-1331-4823-b0db-e50941bd435e';

// Keep false while the site lives on the temporary a2cons.com subdomain, so the
// preview does not get indexed ahead of the real domain. Flip to true at launch.
export const indexable = false;

export const intro =
  'Licensed Florida electrical contractor for commercial, hospitality and residential work. ' +
  'We handle it turnkey: plans, permits, installation, inspections and vendor coordination.';

export const nav = [
  { href: '/services/', label: 'Services' },
  { href: '/projects/', label: 'Projects' },
  { href: '/about/', label: 'About' },
  { href: '/careers/', label: 'Careers' },
];

export const stats = [
  { value: '2010', label: 'In business since' },
  { value: '500+', label: 'Permitted projects' },
  { value: '5.0★', label: 'Rating on Angi' },
  { value: 'Statewide', label: 'Certified license' },
];

export type Service = {
  slug: string;
  icon: string;
  title: string;
  text: string;
  items: string[];
  photo?: string;
};

export const services: Service[] = [
  {
    slug: 'commercial',
    icon: 'building',
    title: 'Commercial & Retail',
    text: 'Tenant build-outs, offices, restaurants and retail, from new construction to occupied remodels.',
    items: ['Tenant improvements', 'Restaurant kitchens & hoods', 'Switchboards & distribution', 'Lighting & controls'],
    photo: 'hero-hardhats-switchgear',
  },
  {
    slug: 'hospitality',
    icon: 'hotel',
    title: 'Hospitality & Multifamily',
    text: 'Hotels, condos and apartment buildings. We work around guests and residents and keep the building running.',
    items: ['Hotel renovations', 'Meter centers & services', 'Pool & amenity electrical', 'Common-area lighting'],
    photo: 'electrical-room',
  },
  {
    slug: 'industrial',
    icon: 'factory',
    title: 'Light Industrial',
    text: 'Power distribution, equipment feeders and controls for warehouses and shops.',
    items: ['Equipment feeders', 'Motor controls', 'Shop & high-bay lighting'],
  },
  {
    slug: 'residential',
    icon: 'home',
    title: 'Residential',
    text: 'Remodels, additions and whole-house rewiring for homeowners and builders.',
    items: ['Remodels & additions', 'Rewiring', 'Lighting design install'],
  },
  {
    slug: 'service-upgrades',
    icon: 'panel',
    title: 'Service & Panel Upgrades',
    text: 'Meter and service changes, panels, disconnects and underground feeders.',
    items: ['Service upgrades', 'Panel replacements', 'Underground feeders'],
  },
  {
    slug: 'generators',
    icon: 'generator',
    title: 'Generators & UPS',
    text: 'Standby generators, transfer switches and medium to large UPS systems.',
    items: ['Standby generators', 'Transfer switches', 'UPS systems'],
  },
  {
    slug: 'fire-alarm-data',
    icon: 'alarm',
    title: 'Fire Alarm & Data',
    text: 'Fire alarm systems, structured cabling and low-voltage infrastructure.',
    items: ['Fire alarm systems', 'Data & voice cabling', 'Low voltage'],
  },
  {
    slug: 'ev-lighting',
    icon: 'bolt',
    title: 'EV Charging & Lighting',
    text: 'EV chargers, interior and site lighting, and lightning protection.',
    items: ['EV chargers', 'Site lighting', 'Lightning protection'],
  },
];

export const process = [
  { title: 'Plans & estimate', text: 'We review your plans or walk the site, then send a clear, itemized proposal.' },
  { title: 'Permitting', text: 'We pull the permits and deal with the building department for you.' },
  { title: 'Rough-in & inspection', text: 'Clean, code-compliant installation, inspected before the walls close.' },
  { title: 'Final & close-out', text: 'Final inspection, testing and hand-over, on schedule.' },
];

export const reviews = [
  {
    name: 'Guillermo R.',
    source: 'Angi',
    date: 'Aug 2024',
    text: 'Always professional, communicates perfectly, handles permits and inspections excellently, pricing is fair. Can’t recommend anyone better!',
  },
  {
    name: 'Rita S.',
    source: 'Angi',
    date: 'Aug 2024',
    text: 'The most efficient and reliable team you can hire for all electrical work in your house or business. Thank you Sterling!',
  },
  {
    name: 'Orlando L.',
    source: 'Angi',
    date: 'Aug 2024',
    text: 'From the planning phase to the completion of the project. Very professional and knowledgeable. Excellent work performed. High level of detail, clean work.',
  },
  {
    name: 'Jose M.',
    source: 'Angi',
    date: 'Aug 2024',
    text: 'Outstanding work every time. I had another electrician before and I will never call anyone else other than Turnpike. On time, clean work and on schedule.',
  },
  {
    name: 'Jorge F.',
    source: 'Angi',
    date: 'Aug 2024',
    text: 'Installation correct as per plans, professional performance, including quality work on time and for the client satisfaction.',
  },
  {
    name: 'BuildZoom client',
    source: 'BuildZoom',
    date: '2013',
    text: 'They get the job done right the first time. Clean and fast. Great customer service.',
  },
];

// Named commercial jobs, from public permit records (BuildZoom). Confirm with Sterling before launch.
export const projects = [
  { name: 'Monticello Hotel', place: 'Miami Beach', type: 'Hospitality', scope: 'Hotel renovation: 300 fixtures, low voltage and a new fire alarm system' },
  { name: 'Hotel Biba', place: 'West Palm Beach', type: 'Hospitality', scope: 'Boutique hotel alterations, pool electrical, data and voice' },
  { name: "Florida's Turnpike Pompano Service Plaza", place: 'Pompano Beach', type: 'Public', scope: 'Restroom renovation electrical and antenna equipment upgrades' },
  { name: 'Oceanside Hotel (Mt. Vernon)', place: 'Miami Beach', type: 'Hospitality', scope: 'Renovation: 350 fixtures, 690 outlets, data and fire alarm' },
  { name: 'Waterside Hotel', place: 'Miami Beach', type: 'Hospitality', scope: '30-room hotel renovation: lighting, wiring, TV/data and pool' },
  { name: 'Triton Tower', place: 'Miami Beach', type: 'Multifamily', scope: 'New 2,000 A service, meter center and pool deck lighting for a 555-unit condo' },
];

export const coverage = [
  'Miami-Dade',
  'Broward',
  'Palm Beach',
  'The Keys',
  'Central Florida',
  'Southwest Florida',
  'North Florida',
];
