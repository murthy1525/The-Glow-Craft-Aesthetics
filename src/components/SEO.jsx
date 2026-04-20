import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, image }) {
  const fullTitle = title
    ? `${title} | GlowCraft Makeup Studio`
    : 'GlowCraft Makeup Studio — Timeless Elegance';
  const desc =
    description ||
    'Luxury bridal, party and HD makeup artistry. Where Beauty Becomes Timeless Elegance.';
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
}
