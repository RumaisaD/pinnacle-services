import logo from './logo.png';
import workshop from './workshop.jpg';
import beforeAfter from './before-after.jpg';
import homeRepair from './home-repair.jpg';
import door from './door.jpg';
import painting from './painting.jpg';
import deck from './deck.jpg';

/** EDIT THIS FILE to replace dummy contact details, copy, services, reviews and photos. */
export const site = {
  name: 'Pinnacle Handyman Services',
  tagline: 'Finish Carpentry & Home Repair',
  motto: 'Built to Last.',
  area: 'Loveland & Northern Colorado',
  // DUMMY contact details: replace before launch.
  phone: '(970) 555-5555',
  email: 'hello@pinnacle-example.com',
  address: '123 Example St, Loveland, CO 80537',
  hours: 'Mon–Sat, 7am–6pm',
  logo,
  aboutImage: workshop,
  beforeAfterImage: beforeAfter,
  // The hero photo is set in styles.css (.hero) → ./hero.jpg
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export const services = [
  { key: 'rep', title: 'Home Repairs & Property Maintenance', quote: 'Small fixes. Smoother days.', tags: ['Punch lists', 'Cabinet & drawer repairs', 'Loose hardware'], image: homeRepair },
  { key: 'dr', title: 'Doors, Windows & Finish Carpentry', quote: 'Doors that close right. Trim that looks right.', tags: ['Doors & hardware', 'Trim repairs', 'Window repair'], image: door },
  { key: 'pt', title: 'Painting, Interior & Exterior', quote: 'Clean lines, even coats, a tidy finish.', tags: ['Interior paint', 'Exterior paint', 'Touch-ups'], image: painting },
  { key: 'ex', title: 'Exterior Improvements & Accessibility', quote: 'Decks, railings and safer entries, built to last.', tags: ['Decks & railings', 'Fences & gates', 'Ramps & grab bars'], image: deck },
] as const;

/** SAMPLE reviews for layout only. Replace with verified customer reviews before launch. */
export const reviews = [
  { initials: 'JM', name: 'Jenna M.', place: 'Loveland', text: 'Sent a punch list on Monday and it was all done by Thursday. Doors, trim and a few loose cabinet pulls.' },
  { initials: 'RK', name: 'Rob K.', place: 'Fort Collins', text: 'Got my rental ready between tenants fast. Tidy work and clear communication the whole way.' },
  { initials: 'AS', name: 'Alicia S.', place: 'Berthoud', text: 'The new deck and railing look great and feel solid. Fair quote, no surprises.' },
  { initials: 'DT', name: 'Dan T.', place: 'Windsor', text: 'Repaired trim and repainted two rooms before we listed the house. Finish was spotless.' },
  { initials: 'CL', name: 'Carol L.', place: 'Johnstown', text: 'Installed grab bars and a handrail for my mother. Careful, patient and professional.' },
];

export const faqs = [
  { q: 'What areas do you serve?', a: 'Loveland and towns across Northern Colorado. Ask if you’re unsure whether we cover your address.' },
  { q: 'Can I send a punch list?', a: 'Yes. Send your list or a few photos and we’ll reply with a clear quote before any work starts.' },
  { q: 'Do you work with landlords and sellers?', a: 'Yes. Between-tenant repairs and pre-sale punch lists are a regular part of the work.' },
  { q: 'Is my request a confirmed booking?', a: 'No. We follow up to confirm details, price and timing first.' },
];

export const values = [
  { title: 'Landlords and property managers.', copy: 'Between tenants? Doors, hardware, trim and punch lists turned around fast.' },
  { title: 'Sellers.', copy: 'Getting ready to sell? Small repairs and fresh paint that help the first impression.' },
  { title: 'Homeowners.', copy: 'Finish carpentry and everyday fixes, done properly the first time.' },
];

export const steps = [
  { title: 'Send your list', copy: 'Choose a service and describe the job, or send a few photos.' },
  { title: 'Get your quote', copy: 'We review the details and reply with a clear price.' },
  { title: 'We get it done', copy: 'We schedule a visit and finish the work properly.' },
];
