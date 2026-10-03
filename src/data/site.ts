// All site copy and facts live here so the design options share one source.

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
  address: {
    street: '2482 W 80th St, Suite 4',
    city: 'Hialeah',
    region: 'FL',
    zip: '33016',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=2482+W+80th+St+Suite+4+Hialeah+FL+33016',
  angiUrl: 'https://www.angi.com/companylist/us/fl/miami/turnpike-electric-corp-reviews-11205864.htm',
  spanish: true,
};

// Web3Forms access key. It is public by design (it only allows sending to the
// email it was created for), so it lives in the source, not in a secret.
export const web3formsKey = 'YOUR_WEB3FORMS_ACCESS_KEY';

// Keep false while the site lives on the temporary a2cons.com subdomain, so the
// preview does not get indexed ahead of the real domain. Flip to true at launch.
export const indexable = false;

export const intro =
  'Licensed Florida electrical contractor for commercial, hospitality and residential work. ' +
  'We handle it turnkey: plans, permits, installation, inspections and vendor coordination.';

export const stats = [
  { value: '2010', label: 'In business since' },
  { value: '500+', label: 'Permitted projects' },
  { value: '5.0', label: 'Rating on Angi' },
  { value: 'Statewide', label: 'Tallahassee to the Keys' },
];

export const services = [
  {
    icon: 'building',
    title: 'Commercial & Retail',
    text: 'Tenant build-outs, offices, restaurants and retail. New construction and remodels.',
  },
  {
    icon: 'hotel',
    title: 'Hospitality & Multifamily',
    text: 'Hotels, condos and apartment buildings, including occupied-building renovations.',
  },
  {
    icon: 'factory',
    title: 'Light Industrial',
    text: 'Power distribution, equipment feeders, motor controls and shop lighting.',
  },
  {
    icon: 'home',
    title: 'Residential',
    text: 'Remodels, additions and whole-house rewiring for homeowners and builders.',
  },
  {
    icon: 'panel',
    title: 'Service & Panel Upgrades',
    text: 'Meter and service changes, panels, disconnects and underground feeders.',
  },
  {
    icon: 'generator',
    title: 'Generators & UPS',
    text: 'Standby generators, transfer switches and medium to large UPS systems.',
  },
  {
    icon: 'alarm',
    title: 'Fire Alarm & Data',
    text: 'Fire alarm systems, structured cabling and low-voltage infrastructure.',
  },
  {
    icon: 'bolt',
    title: 'EV Charging & Lighting',
    text: 'EV chargers, interior and site lighting, and lightning protection.',
  },
];

export const process = [
  { title: 'Plans & estimate', text: 'We review your plans or walk the site, then give you a clear, itemized proposal.' },
  { title: 'Permitting', text: 'We pull the permits and deal with the building department for you.' },
  { title: 'Rough-in & inspection', text: 'Clean, code-compliant installation, inspected before the walls close.' },
  { title: 'Final & close-out', text: 'Final inspection, testing and hand-over, on schedule.' },
];

export const reviews = [
  {
    name: 'Guillermo R.',
    source: 'Angi',
    text: 'Always professional, communicates perfectly, handles permits and inspections excellently, pricing is fair. Can’t recommend anyone better!',
  },
  {
    name: 'Rita S.',
    source: 'Angi',
    text: 'The most efficient and reliable team you can hire for all electrical work in your house or business. Thank you Sterling!',
  },
  {
    name: 'Orlando L.',
    source: 'Angi',
    text: 'From the planning phase to the completion of the project. Very professional and knowledgeable. Excellent work performed. High level of detail, clean work.',
  },
  {
    name: 'Jose M.',
    source: 'Angi',
    text: 'Outstanding work every time. I had another electrician before and I will never call anyone else other than Turnpike. On time, clean work and on schedule.',
  },
  {
    name: 'Jorge F.',
    source: 'Angi',
    text: 'Installation correct as per plans, professional performance, including quality work on time and for the client satisfaction.',
  },
  {
    name: 'BuildZoom client',
    source: 'BuildZoom',
    text: 'They get the job done right the first time. Clean and fast. Great customer service.',
  },
];

export const coverage = [
  'Miami-Dade',
  'Broward',
  'Palm Beach',
  'Monroe (the Keys)',
  'Polk & Central Florida',
  'Southwest Florida',
  'North Florida & Tallahassee',
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

export const nav = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#careers', label: 'Careers' },
  { href: '#contact', label: 'Contact' },
];
