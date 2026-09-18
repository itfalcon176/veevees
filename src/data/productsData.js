export const CATEGORIES = [
  { id: 'all', name: 'All Products', slug: 'all' },
  { id: 'gas-power-tools', name: 'Gas Power Tools', slug: 'gas-power-tools' },
  { id: 'electric-power-tools', name: 'Electric Power Tools', slug: 'electric-power-tools' },
  { id: 'cordless-tools', name: 'Cordless Tools', slug: 'cordless-tools' },
  { id: 'cutting-tools', name: 'Cutting Tools', slug: 'cutting-tools' },
  { id: 'hand-tools', name: 'Pliers, Sockets & Hand Tools', slug: 'hand-tools' },
  { id: 'super-steel', name: 'Super Steel', slug: 'super-steel' },
  { id: 'vertigo-gold', name: 'Vertigo Gold', slug: 'vertigo-gold' },
  { id: 'wood-cutter', name: 'Wood Cutter', slug: 'wood-cutter' }
];

export const BRANDS = [
  'Super Steel',
  'Vertigo Gold',
  'Logger',
  'Topper',
  'Makita',
  'De Neers',
  'Golden Steel',
  'Wood Cutter',
  'GG Tools'
];

export const PRODUCTS = [
  {
    id: 4304,
    slug: '75cc-gasoline-chainsaw',
    name: '75CC GASOLINE CHAINSAW',
    sku: 'P#1028',
    brand: 'Vertigo Gold',
    brandLogo: '/images/Untitled_design__2_-removebg-preview.png',
    categories: ['Gas Power Tools', 'Super Steel', 'Vertigo Gold', 'Cutting Tools'],
    price: 11450,
    regularPrice: 12900,
    priceOnRequest: false,
    rating: 5.0,
    reviewCount: 3,
    inStock: true,
    isNew: true,
    featured: true,
    image: '/images/products/ChatGPT-Image-Feb-11-2026-04_54_43-PM.png',
    gallery: [
      '/images/products/ChatGPT-Image-Feb-11-2026-04_54_43-PM.png',
      '/images/products/ChatGPT-Image-Feb-11-2026-04_22_31-PM.png',
      '/images/products/ChatGPT-Image-Feb-11-2026-03_42_38-PM.png'
    ],
    shortDescription: 'High-performance 75cc 2-stroke gasoline chainsaw engineered for professional forestry, heavy timber felling, and demanding logging operations.',
    description: `
      <h3>Professional High Power Gasoline Chainsaw</h3>
      <p>The Vertigo Gold 75CC Gasoline Chainsaw delivers robust commercial-grade performance with an advanced 2-stroke 3.1kW engine. Built with premium forged crankshafts, magnesium crankcase, and quick-start assist, it guarantees swift ignition and minimal operator fatigue even during long working cycles.</p>
      <ul>
        <li>Model No: VG-GCS-75CC</li>
        <li>Packaging: 2 Pcs / Carton</li>
        <li>Auto-lubricating chain system with adjustable flow rate</li>
        <li>Quick-stop inertia-activated chain safety brake</li>
        <li>High-efficiency anti-vibration rubber damper mounts</li>
      </ul>
    `,
    specifications: [
      { label: 'Model Number', value: 'VG-GCS-75CC' },
      { label: 'Engine Type', value: '1E45.2F 2-Stroke, Air-Cooled' },
      { label: 'Displacement', value: '75 cc' },
      { label: 'Engine Power', value: '3.1 kW / 4.2 HP' },
      { label: 'Rated Speed', value: '8500 RPM' },
      { label: 'Guide Bar Size', value: '18" / 22" (Alloy Steel)' },
      { label: 'Fuel Tank Capacity', value: '750 ml' },
      { label: 'Fuel Mixture Ratio', value: '25:1 (Gasoline:2T Oil)' },
      { label: 'Oil Tank Capacity', value: '350 ml' },
      { label: 'Packaging', value: '2 Pcs / CTN' },
      { label: 'Net Weight', value: '7.2 kg' }
    ]
  },
  {
    id: 4302,
    slug: '65cc-gasoline-chainsaw',
    name: '65CC GASOLINE CHAINSAW',
    sku: 'P#1029',
    brand: 'Wood Cutter',
    brandLogo: '/images/WhatsApp-Image-2024-12-21-at-12.14.06-PM-1.jpeg',
    categories: ['Gas Power Tools', 'Super Steel', 'Wood Cutter', 'Cutting Tools'],
    price: 9850,
    regularPrice: 10990,
    priceOnRequest: false,
    rating: 4.8,
    reviewCount: 2,
    inStock: true,
    isNew: true,
    featured: true,
    image: '/images/products/ChatGPT-Image-Feb-11-2026-04_22_31-PM.png',
    gallery: [
      '/images/products/ChatGPT-Image-Feb-11-2026-04_22_31-PM.png',
      '/images/products/ChatGPT-Image-Feb-11-2026-03_42_38-PM.png',
      '/images/products/ChatGPT-Image-Feb-11-2026-04_54_43-PM.png'
    ],
    shortDescription: 'Reliable 65cc professional gasoline chainsaw for estate maintenance, carpentry timber cutting, and wood processing.',
    description: `
      <h3>Durable 65CC Wood Cutter Chainsaw</h3>
      <p>The Wood Cutter 65CC Chainsaw (WC-CM-6500) provides dependable cutting power with balanced handling. Designed specifically for Indian hardwood trimming, timber clearing, and agricultural maintenance.</p>
      <ul>
        <li>Model No: WC-CM-6500</li>
        <li>Packaging: 2 Pcs / Carton</li>
        <li>Heavy-duty sprocket nose guide bar</li>
        <li>Easy-clean dual air filtration system</li>
      </ul>
    `,
    specifications: [
      { label: 'Model Number', value: 'WC-CM-6500' },
      { label: 'Engine Type', value: '1E45.2F 2-Stroke Single Cylinder' },
      { label: 'Displacement', value: '65 cc' },
      { label: 'Engine Power', value: '3.1 kW' },
      { label: 'Bar Size', value: '18" / 22"' },
      { label: 'Starting System', value: 'Recoil Easy Starter' },
      { label: 'Carton Qty', value: '2 Pcs' }
    ]
  },
  {
    id: 4297,
    slug: '62cc-gasoline-chainsaw',
    name: '62CC GASOLINE CHAINSAW',
    sku: 'P#1049',
    brand: 'Super Steel',
    brandLogo: '/images/WhatsApp-Image-2024-12-21-at-12.14.05-PM.jpeg',
    categories: ['Gas Power Tools', 'Super Steel', 'Wood Cutter', 'Cutting Tools'],
    price: 8900,
    regularPrice: 9950,
    priceOnRequest: false,
    rating: 5.0,
    reviewCount: 4,
    inStock: true,
    isNew: false,
    featured: true,
    image: '/images/products/ChatGPT-Image-Feb-11-2026-03_42_38-PM.png',
    gallery: [
      '/images/products/ChatGPT-Image-Feb-11-2026-03_42_38-PM.png',
      '/images/products/ChatGPT-Image-Feb-11-2026-04_22_31-PM.png',
      '/images/products/ChatGPT-Image-Feb-11-2026-04_54_43-PM.png'
    ],
    shortDescription: 'Compact and efficient 62cc 2.3kW chainsaw built with Super Steel technology for versatile multi-purpose cutting.',
    description: `
      <h3>Versatile 62CC Multi-Purpose Chainsaw</h3>
      <p>The Super Steel 62CC Gasoline Chainsaw delivers optimal power-to-weight ratio. Ideal for landscaping contractors, farm fencing, and firewood processing.</p>
      <ul>
        <li>Model No: WC-CM-6200</li>
        <li>Packaging: 2 Pcs / Carton</li>
        <li>Ergonomic rubberized grip with front hand guard</li>
        <li>Low kickback chain for maximum operator safety</li>
      </ul>
    `,
    specifications: [
      { label: 'Model Number', value: 'WC-CM-6200' },
      { label: 'Engine Power', value: '2.3 kW / 3.1 HP' },
      { label: 'Displacement', value: '62 cc' },
      { label: 'Engine Type', value: '2 Stroke Engine' },
      { label: 'Bar Size', value: '18" / 22"' },
      { label: 'Carton Packing', value: '2 Pcs / CTN' }
    ]
  },
  {
    id: 4310,
    slug: 'super-steel-drill-tool-kit',
    name: 'SUPER STEEL 13MM IMPACT DRILL TOOL KIT',
    sku: 'P#1055',
    brand: 'Super Steel',
    brandLogo: '/images/WhatsApp-Image-2024-12-21-at-12.14.05-PM.jpeg',
    categories: ['Electric Power Tools', 'Cordless Tools', 'Super Steel'],
    price: 3450,
    regularPrice: 4200,
    priceOnRequest: false,
    rating: 4.9,
    reviewCount: 7,
    inStock: true,
    isNew: true,
    featured: false,
    image: '/images/s22.png',
    gallery: ['/images/s22.png'],
    shortDescription: 'Comprehensive 850W heavy impact drill machine packed with 102-piece multi-purpose accessories and hard-shell carry case.',
    description: `
      <h3>Super Steel Heavy Duty Impact Drill Kit</h3>
      <p>Designed for mason, metal, and woodworking applications, this 13mm impact drill kit features a high-copper 850W armature, reversible variable speed trigger, and hammered impact mode.</p>
    `,
    specifications: [
      { label: 'Power Input', value: '850 W' },
      { label: 'Chuck Capacity', value: '13 mm (Keyed)' },
      { label: 'No Load Speed', value: '0 - 2800 RPM' },
      { label: 'Impact Rate', value: '0 - 44800 BPM' }
    ]
  },
  {
    id: 4311,
    slug: 'heavy-duty-metal-cutting-machine',
    name: 'SUPER STEEL 355MM CUT-OFF METAL CHOP SAW',
    sku: 'P#1062',
    brand: 'Super Steel',
    brandLogo: '/images/WhatsApp-Image-2024-12-21-at-12.14.05-PM.jpeg',
    categories: ['Cutting Tools', 'Electric Power Tools', 'Super Steel'],
    price: 7600,
    regularPrice: 8400,
    priceOnRequest: false,
    rating: 4.7,
    reviewCount: 5,
    inStock: true,
    isNew: false,
    featured: false,
    image: '/images/s21-1.png',
    gallery: ['/images/s21-1.png'],
    shortDescription: 'Industrial 2400W 355mm abrasive metal cut-off machine for high-precision steel angle, pipe, and channel cutting.',
    description: `
      <h3>Industrial 355mm Metal Chop Saw</h3>
      <p>High-torque 2400W motor with heavy cast iron base, quick-clamp vise, and spark diversion shield.</p>
    `,
    specifications: [
      { label: 'Wheel Diameter', value: '355 mm (14")' },
      { label: 'Rated Power', value: '2400 W' },
      { label: 'No Load Speed', value: '3800 RPM' }
    ]
  },
  {
    id: 4312,
    slug: 'rotary-sander-polisher-machine',
    name: 'SUPER STEEL ORBITAL SANDER & POLISHER',
    sku: 'P#1070',
    brand: 'Super Steel',
    brandLogo: '/images/WhatsApp-Image-2024-12-21-at-12.14.05-PM.jpeg',
    categories: ['Electric Power Tools', 'Super Steel'],
    price: 2950,
    regularPrice: 3400,
    priceOnRequest: false,
    rating: 4.8,
    reviewCount: 3,
    inStock: true,
    isNew: true,
    featured: false,
    image: '/images/s23.png',
    gallery: ['/images/s23.png'],
    shortDescription: 'Smooth dual-action orbital sander machine with 6-speed variable control and active dust extraction system.',
    description: `
      <h3>Precision Rotary Sander Machine</h3>
      <p>Ergonomic palm grip sander engineered for automotive body finishing and furniture carpentry smoothing.</p>
    `,
    specifications: [
      { label: 'Pad Size', value: '125 mm (5")' },
      { label: 'Input Power', value: '450 W' },
      { label: 'Oscillation', value: '4000 - 12000 OPM' }
    ]
  },
  {
    id: 4313,
    slug: 'topper-heavy-angle-grinder',
    name: 'TOPPER 100MM HEAVY ANGLE GRINDER',
    sku: 'P#1082',
    brand: 'Topper',
    brandLogo: '/images/WhatsApp-Image-2024-12-21-at-12.14.06-PM.jpeg',
    categories: ['Electric Power Tools', 'Cutting Tools'],
    price: 2450,
    regularPrice: 2850,
    priceOnRequest: false,
    rating: 4.9,
    reviewCount: 6,
    inStock: true,
    isNew: false,
    featured: false,
    image: '/images/s21-1.png',
    gallery: ['/images/s21-1.png'],
    shortDescription: 'Durable 900W slim-body angle grinder with spiral bevel gears for grinding, weld seam cleaning, and tile cutting.',
    description: `
      <h3>Topper Professional Angle Grinder</h3>
      <p>Engineered with dust-sealed switch and reinforced motor windings for extended tool life in high-abrasion environments.</p>
    `,
    specifications: [
      { label: 'Disc Diameter', value: '100 mm (4")' },
      { label: 'Power', value: '900 W' },
      { label: 'Speed', value: '11000 RPM' }
    ]
  },
  {
    id: 4314,
    slug: 'de-neers-chrome-vanadium-socket-set',
    name: 'DE NEERS 24-PC INDUSTRIAL SOCKET WRENCH SET',
    sku: 'P#1094',
    brand: 'De Neers',
    brandLogo: '/images/Untitled-design-5.jpg',
    categories: ['Pliers, Sockets & Hand Tools'],
    price: 4800,
    regularPrice: 5600,
    priceOnRequest: false,
    rating: 5.0,
    reviewCount: 8,
    inStock: true,
    isNew: false,
    featured: false,
    image: '/images/s22.png',
    gallery: ['/images/s22.png'],
    shortDescription: 'Industrial drop-forged chrome vanadium steel 1/2" drive metric socket set in robust blow-moulded steel box.',
    description: `
      <h3>De Neers Revolution Hand Tools</h3>
      <p>Complies with DIN/ISO standards. High torque ratchet mechanism with mirror chrome corrosion-resistant plating.</p>
    `,
    specifications: [
      { label: 'Drive Size', value: '1/2 Inch Square' },
      { label: 'Material', value: 'Chrome Vanadium (Cr-V)' },
      { label: 'Contents', value: '24 Metric Pieces (10mm - 32mm)' }
    ]
  }
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === Number(id)) || null;
}

export function getRelatedProducts(currentProduct, limit = 4) {
  return PRODUCTS.filter(
    (p) =>
      p.id !== currentProduct.id &&
      (p.brand === currentProduct.brand ||
        p.categories.some((c) => currentProduct.categories.includes(c)))
  ).slice(0, limit);
}
