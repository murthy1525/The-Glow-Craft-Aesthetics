// Replace Cloudinary URLs with your own uploaded assets.
const CLD = 'https://res.cloudinary.com/demo/image/upload/q_auto,f_auto';

export const services = [
  {
    id: 'bridal',
    title: 'Bridal Makeup',
    tag: 'Bridal',
    price: 'From $350',
    description:
      'A bespoke bridal experience — long-wear HD finish, custom lashes, trial session and on-location service for your most cherished day.',
    image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=900&q=80&auto=format&fit=crop',
    features: [
      'Pre-bridal trial session',
      'HD airbrush + skin prep ritual',
      'Custom lashes & touch-up kit',
      'On-location service available',
    ],
  },
  {
    id: 'party',
    title: 'Party Makeup',
    tag: 'Party',
    price: 'From $120',
    description:
      'Glam ready for cocktails, anniversaries and celebrations — radiant, photo-ready looks tailored to your outfit and occasion.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80&auto=format&fit=crop',
    features: [
      'Skin prep & priming',
      'Eye look of choice',
      'Lash application',
      'Setting spray for all-night wear',
    ],
  },
  {
    id: 'hd',
    title: 'HD Makeup',
    tag: 'HD',
    price: 'From $180',
    description:
      'Camera-ready perfection using high-definition products and airbrush technology — flawless under flash, in 4K and in person.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80&auto=format&fit=crop',
    features: [
      'HD airbrush foundation',
      'Hi-def colour matching',
      'Studio-grade contour',
      'Setting & finishing mist',
    ],
  },
  {
    id: 'engagement',
    title: 'Engagement Glam',
    tag: 'Signature',
    price: 'From $250',
    description:
      'A soft, romantic look crafted for engagement portraits and intimate ceremonies — luminous skin, dewy finish and timeless lines.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=80&auto=format&fit=crop',
    features: [
      'Romantic dewy base',
      'Soft glam eyes',
      'Hair styling add-on',
      'Touch-up kit included',
    ],
  },
  {
    id: 'editorial',
    title: 'Editorial & Photoshoot',
    tag: 'Editorial',
    price: 'From $220',
    description:
      'High-fashion artistry for magazine shoots, campaigns and creative portfolios — bold, conceptual and impeccably finished.',
    image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=900&q=80&auto=format&fit=crop',
    features: [
      'Concept consultation',
      'Multi-look session',
      'On-set retouch',
      'Portfolio collaboration',
    ],
  },
  {
    id: 'masterclass',
    title: 'Self-Glam Masterclass',
    tag: 'Class',
    price: 'From $90 / seat',
    description:
      'A guided 2-hour class teaching pro techniques you can recreate at home — base, brows, eyes and the glow finish.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80&auto=format&fit=crop',
    features: [
      'Small group (max 6)',
      'Take-home product list',
      'Personal feedback',
      'Certificate of completion',
    ],
  },
];
