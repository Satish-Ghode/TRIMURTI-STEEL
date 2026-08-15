import { DoorProduct, ProductFinish, CaseStudy, BlogPost, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: "Trimurti Enterprises",
  partnerBrand: "JSW Avante",
  parentGroup: "JSW Steel Coated Products Limited",
  tagline: "NOTHING CORRODES US",
  subtitle: "Smart Steel Doors & Windows for Modern Architecture",
  description: "Trimurti Enterprises is the authorized partner and official manufacturer-distributor of JSW Avante Smart Steel Doors & Windows. Engineered using heavy-duty galvanized steel, high-density honeycomb cores, and anticorrosive weather coatings.",
  phone: "+91 98765 43210",
  altPhone: "+91 98123 45678",
  email: "sales@trimurtienterprises.in",
  infoEmail: "info@trimurtienterprises.in",
  address: "Plot No. 42, Industrial Area, Phase II, Sector 58, Metro Corridor, New Delhi / NCR - 110020, India",
  factoryAddress: "JSW Avante Manufacturing & Fabrication Wing, Trimurti Industrial Complex, NCR Industrial Zone, India",
  workingHours: "Monday - Saturday: 9:00 AM - 7:00 PM (IST)",
  gstin: "07AAACT1234F1Z9",
  isoCert: "ISO 9001:2015 & CBRI Fire Safety Certified",
  socials: {
    facebook: "https://facebook.com/TrimurtiJSWAvante",
    twitter: "https://twitter.com/TrimurtiSteel",
    linkedin: "https://linkedin.com/company/trimurti-enterprises-jsw-avante",
    instagram: "https://instagram.com/trimurti_jsw_avante",
    youtube: "https://youtube.com/c/TrimurtiJSWAvanteDoors"
  },
  stats: [
    { label: "Corrosion Resistance", value: "100%", subtext: "Galvanized Steel Protection" },
    { label: "Doors & Windows Installed", value: "125,000+", subtext: "Across Residential & Commercial" },
    { label: "Fire Rating Capability", value: "Up to 120 Min", subtext: "CBRI Tested & Certified" },
    { label: "Termite & Pest Risk", value: "0%", subtext: "100% Steel Core Engine" },
    { label: "Product Warranty", value: "10 Years", subtext: "Manufacturer Guarantee" }
  ]
};

export const COLOR_FINISHES: ProductFinish[] = [
  // Wood Finishes
  { id: 'golden-oak', name: 'Golden Oak', type: 'wood', hex: '#D49042', texturePattern: 'wood-oak' },
  { id: 'dark-walnut', name: 'Dark Walnut', type: 'wood', hex: '#5A3825', texturePattern: 'wood-walnut' },
  { id: 'teak-wood', name: 'Teak Wood', type: 'wood', hex: '#A36630', texturePattern: 'wood-teak' },
  { id: 'cherry-wood', name: 'Cherry Wood', type: 'wood', hex: '#802B20', texturePattern: 'wood-cherry' },
  { id: 'mahogany', name: 'Mahogany', type: 'wood', hex: '#4A1C16', texturePattern: 'wood-mahogany' },
  // RAL Solid Finishes
  { id: 'ral-8017', name: 'Brown', type: 'ral', code: 'RAL 8017', hex: '#4B3621' },
  { id: 'ral-5010', name: 'Gentian Blue', type: 'ral', code: 'RAL 5010', hex: '#0E426A' },
  { id: 'ral-1015', name: 'Light Ivory', type: 'ral', code: 'RAL 1015', hex: '#E6DBC4' },
  { id: 'ral-3000', name: 'Flame Red', type: 'ral', code: 'RAL 3000', hex: '#AF2B1E' },
  { id: 'ral-7035', name: 'Light Grey', type: 'ral', code: 'RAL 7035', hex: '#D0D5DD' },
  { id: 'ral-9016', name: 'Traffic White', type: 'ral', code: 'RAL 9016', hex: '#F8FAFC' }
];

export const PRODUCTS: DoorProduct[] = [
  {
    id: 'plain-finish-door',
    title: 'Plain Finish Smart Steel Door',
    category: 'doors',
    subCategory: 'plain',
    shortDesc: 'Sleek, ultra-modern flush smart steel doors with smooth architectural finish for residences and modern offices.',
    fullDesc: 'JSW Avante Plain Finish Steel Doors combine seamless minimal aesthetics with unmatched structural integrity. Built with galvanized steel skins and high-density honeycomb insulation, these doors offer exceptional thermal stability, sound damping, and termite-proof peace of mind.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    features: [
      'Galvanized steel skins resistant to rusting and swelling',
      'Honeycomb paper or polyurethane insulation core',
      'Multi-point security locking system with brass cylinders',
      'UV-resistant powder coating or natural wood finish',
      'Maintenance-free operation for over 25 years'
    ],
    specifications: {
      sheetThickness: '0.8 mm - 1.2 mm High Tensile Galvanized Steel',
      coreInfill: 'High-Density Structural Honeycomb Paper Infill',
      frameGauge: '1.2 mm - 1.6 mm Galvanized Steel Frame',
      standardSizes: ['3ft x 7ft (900mm x 2100mm)', '3.5ft x 7ft (1050mm x 2100mm)', '4ft x 8ft (1200mm x 2400mm)', 'Custom Sizes Available'],
      hardwareOptions: ['Mortise Lock', 'Digital Smart Lock', 'Door Closer', 'Stainless Steel Hinges'],
      warranty: '10 Years Structural & Anti-Corrosion Warranty'
    },
    suitableFor: ['Main Entrance', 'Bedroom Doors', 'Office Cabins', 'Apartment Entryways', 'Utility Doors'],
    basePricePerSqFt: 380
  },
  {
    id: 'embossed-door',
    title: 'Embossed Smart Steel Door',
    category: 'doors',
    subCategory: 'embossed',
    shortDesc: 'Deep 3D embossed designer door panels engineered with precision hydraulic press technology.',
    fullDesc: 'Featuring artistic geometric and traditional panel impressions, JSW Avante Embossed Doors deliver classic timber door luxury with the indestructible strength of steel. Available in rich wood grains like Dark Walnut, Teak, and Mahogany.',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
    features: [
      'Precision hydraulic press 3D panel embossing',
      'Authentic heat-transferred natural wood grain textures',
      'Honeycomb core offering acoustic dampening up to 32 dB',
      'Heavy-duty anti-pry security hinges',
      'Zero warping, expanding, or splitting under seasonal changes'
    ],
    specifications: {
      sheetThickness: '0.8 mm - 1.0 mm Galvanized Steel',
      coreInfill: 'Honeycomb Infill / Polyurethane Foam',
      frameGauge: '1.2 mm Galvanized Steel Frame',
      standardSizes: ['3ft x 7ft', '3.5ft x 7ft', '4ft x 7.5ft'],
      hardwareOptions: ['Brass Mortise Handle', 'Peep Hole / Digital Viewer', 'Security Chain', 'Magnetic Door Stop'],
      warranty: '10 Years Warranty'
    },
    suitableFor: ['Luxury Villas', 'Apartment Main Doors', 'Executive Suites', 'Hotels & Resorts'],
    basePricePerSqFt: 420
  },
  {
    id: 'double-door-grill',
    title: 'Double Door with Integrated Safety Grill',
    category: 'doors',
    subCategory: 'double-grill',
    shortDesc: 'Grand double door entrance incorporating an elegant protective steel grill and dual-action ventilation.',
    fullDesc: 'Designed for high security main entrances, the Double Door with Grill offers grand curb appeal combined with maximum security. Features an outer mesh/grill door and an inner solid smart steel door, allowing fresh airflow without compromising security.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    features: [
      'Dual-leaf configuration: Outer ornamental grill + inner insulated door',
      'Heavy steel mesh screening against insects and intruders',
      'Dual multi-point locking mechanism',
      'Reinforced heavy-duty threshold and weather strip',
      'Available in premium Teak, Oak, and Walnut finishes'
    ],
    specifications: {
      sheetThickness: '1.0 mm - 1.2 mm Galvanized Steel',
      coreInfill: 'High Density Honeycomb Infill',
      frameGauge: '1.6 mm Heavy Galvanized Steel Frame',
      standardSizes: ['5ft x 7ft (1500mm x 2100mm)', '6ft x 8ft (1800mm x 2400mm)', 'Custom Double Sizes'],
      hardwareOptions: ['Dual Heavy Duty Handles', 'Smart Fingerprint Lock', 'Peephole', 'Heavy Deadbolts'],
      warranty: '10 Years Warranty'
    },
    suitableFor: ['Main Villa Entrances', 'Bungalow Front Doors', 'Gated Community Entries'],
    basePricePerSqFt: 550
  },
  {
    id: 'fire-rated-door',
    title: 'Heavy Duty Commercial Fire Door',
    category: 'doors',
    subCategory: 'fire',
    shortDesc: 'CBRI certified 60/90/120-minute fire-rated emergency exit doors with panic hardware.',
    fullDesc: 'Built to safeguard human lives and critical infrastructure during emergencies, JSW Avante Fire Doors are tested in accordance with IS 3614 and BS 476. Filled with ceramic fiber / mineral wool cores to contain smoke and heat up to 120 minutes.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    features: [
      'CBRI / NABL lab tested for 60 min, 90 min & 120 min fire integrity',
      'Intumescent smoke seal strips expand under heat to block lethal gas',
      'UL-listed panic bar push hardware for rapid emergency egress',
      'Fire-rated vision glass panel options',
      'Heavy-duty hydraulic door closer included'
    ],
    specifications: {
      sheetThickness: '1.2 mm - 1.5 mm Galvanized Steel',
      coreInfill: 'Rockwool / Mineral Wool Infill (100 kg/m³ density)',
      frameGauge: '1.6 mm - 2.0 mm Heavy Duty Fire Frame',
      fireRating: '60 / 90 / 120 Minutes Fire Tested (IS 3614)',
      standardSizes: ['3ft x 7ft', '3.5ft x 7ft', '4ft x 8ft', 'Double Exit 6ft x 8ft'],
      hardwareOptions: ['Panic Push Bar', 'External Trim Handle', 'Heavy Hydraulic Door Closer', 'Mortise Fire Lock'],
      warranty: '10 Years Warranty'
    },
    suitableFor: ['Hospitals & Healthcare', 'Commercial Malls & Towers', 'Industrial Factories', 'Stairwell Enclosures', 'Server Rooms'],
    basePricePerSqFt: 620
  },
  {
    id: 'glazed-steel-door',
    title: 'Architectural Glazed Steel Door',
    category: 'doors',
    subCategory: 'glazed',
    shortDesc: 'Modern steel frame door integrated with toughened architectural glass panels for maximum natural light.',
    fullDesc: 'Glazed Steel Doors combine high-visibility transparent glass with super-strong narrow profile JSW steel frames. Perfect for corporate lobbies, retail storefronts, conference rooms, and contemporary residential patios.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    features: [
      'Slim-profile heavy steel frame with ultra-clear toughened/laminated safety glass',
      'Acoustic sealing gaskets preventing sound transfer',
      'Sleek matte black (RAL 9005) or anodized metallic frame coatings',
      'Smooth heavy-duty floor spring or concealed top pivot option',
      'High wind-load resistance for external building facades'
    ],
    specifications: {
      sheetThickness: '1.2 mm Tubular & Bent Galvanized Steel Profiles',
      coreInfill: 'Glazed Toughened Glass (6mm - 12mm DGU Glass)',
      frameGauge: '1.6 mm Reinforced Frame',
      standardSizes: ['3.5ft x 8ft', '4ft x 9ft', 'Custom Curtain Wall Dimensions'],
      hardwareOptions: ['Pull Handles', 'Patch Fittings', 'Floor Spring', 'Electric Strike Lock'],
      warranty: '10 Years Warranty'
    },
    suitableFor: ['Corporate Lobbies', 'Conference Rooms', 'Showrooms & Retail', 'Luxury Patios'],
    basePricePerSqFt: 680
  },
  {
    id: 'sliding-steel-window',
    title: 'Smart Steel Sliding Windows',
    category: 'windows',
    subCategory: 'sliding',
    shortDesc: 'Corrosion-proof steel sliding windows featuring double weather seals, smooth nylon rollers, and mosquito mesh.',
    fullDesc: 'JSW Avante Steel Sliding Windows are engineered to withstand extreme rainfall, high wind velocity, and corrosive weather without rusting or binding. Features smooth double-track sliding rails and integrated wire mesh for insect protection.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    features: [
      '100% galvanized anti-rust steel profiles with polyester powder coating',
      'Dual / Triple track sliding frame options with integrated fly mesh',
      'EPDM rubber gaskets for airtight dust and rain protection',
      'Heavy nylon ball-bearing rollers for effortless whisper-quiet glide',
      'Keyed security locks and anti-lift safety blocks'
    ],
    specifications: {
      sheetThickness: '1.0 mm Galvanized Steel Window Sections',
      coreInfill: '4mm - 6mm Clear Float / Frosted Glass + Stainless Mesh',
      frameGauge: '1.2 mm Double/Triple Track Frame',
      standardSizes: ['4ft x 4ft', '5ft x 4ft', '6ft x 4ft', 'Custom Balcony Sizes'],
      hardwareOptions: ['Crescent Lock', 'Touch Latch', 'SS Wire Mesh', 'Sub-Frame Fixings'],
      warranty: '10 Years Warranty'
    },
    suitableFor: ['Apartment Windows', 'High-Rise Balconies', 'School Classrooms', 'Hospital Wards'],
    basePricePerSqFt: 320
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apollo-hospital-delhi',
    title: 'Apollo Superspeciality Hospital Infrastructure Security',
    clientName: 'Apollo Healthcare Foundation',
    industry: 'Healthcare & Hospital',
    location: 'New Delhi',
    doorsSupplied: 450,
    doorTypes: ['Fire Rated Doors (120 min)', 'Plain Finish Acoustic Doors', 'Glazed Lobbies'],
    challenge: 'Strict health safety regulations required 120-minute certified fire barrier doors with sound dampening and antibacterial easy-clean surfaces.',
    solution: 'Trimurti Enterprises manufactured and installed custom JSW Avante 120-min fire doors equipped with Rockwool insulation and panic push bars, along with antimicrobial coated flush room doors.',
    results: [
      '100% CBRI Fire Safety Audit Clearance on first inspection',
      '30 dB noise reduction across patient wards',
      'Completed installation 15 days ahead of building commissioning'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dlf-luxury-villas',
    title: 'DLF Cybercity Green Township Doors Supply',
    clientName: 'DLF Universal Infrastructure',
    industry: 'Residential Real Estate',
    location: 'Gurugram, Haryana',
    doorsSupplied: 1200,
    doorTypes: ['Embossed Dark Walnut Doors', 'Double Door with Safety Grill'],
    challenge: 'The developer needed termite-proof, security-heavy main entrance doors that possessed the rich visual warmth of natural wood without long-term warping.',
    solution: 'Trimurti Enterprises deployed JSW Avante Embossed Smart Steel Doors with authentic heat-transfer Dark Walnut finish and integrated digital smart locks.',
    results: [
      'Zero termite/warping complaints across 300 luxury villas over 4 years',
      '35% lower cost compared to high-end solid teak wood doors',
      'Consistently praised by homeowners for acoustic dampening and curb appeal'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'metro-station-egress',
    title: 'DMRC Rapid Transit Corridor Station Emergency Exits',
    clientName: 'Delhi Metro Rail Corporation',
    industry: 'Government & Transport',
    location: 'Delhi NCR',
    doorsSupplied: 280,
    doorTypes: ['Heavy Duty Galvanized Fire Exit Doors'],
    challenge: 'Extreme high-footfall environment exposed to severe pollution, moisture, and strict government safety mandates.',
    solution: 'Trimurti Enterprises supplied 2.0mm heavy gauge galvanized steel fire exit doors with salt-spray anti-corrosion coating and UL panic bars.',
    results: [
      '100% corrosion resistance after 5 years of daily exposure',
      'Fully compliant with National Building Code (NBC 2016)',
      'Zero maintenance downtime reported'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'steel-vs-wooden-doors-comparison',
    slug: 'steel-vs-wooden-doors-the-ultimate-guide',
    title: 'Steel Doors vs Wooden Doors: Why Modern Architecture is Switching to Smart Steel',
    excerpt: 'Explore why engineers and architects are replacing traditional timber doors with JSW Avante Smart Steel Doors for 0% termite risk, superior fire rating, and lifetime durability.',
    content: [
      'For decades, solid wooden doors were considered the standard for residential and commercial entryways. However, swelling during monsoons, termite attacks, fire hazards, and high maintenance costs have exposed timber’s critical limitations.',
      'JSW Avante Smart Steel Doors, manufactured by Trimurti Enterprises, represent a paradigm shift in door engineering. Constructed with hot-dip galvanized steel skins and high-density honeycomb paper infill, smart steel doors provide the visual elegance of premium wood without any of its vulnerabilities.',
      'Key Advantages of Smart Steel Doors over Wooden Doors:\n1. 100% Termite & Pest Proof: Steel core prevents termite infestations permanently.\n2. No Swelling or Warping: Unaffected by monsoon moisture or seasonal temperature swings.\n3. Fire Protection: Certified fire ratings up to 120 minutes compared to wood which burns in minutes.\n4. Eco-Friendly: 100% recyclable steel reduces deforestation and timber harvesting.'
    ],
    author: 'Er. Rajesh Sharma (Senior Metallurgical Engineer)',
    date: 'July 18, 2026',
    category: 'Buying Guide',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    tags: ['Steel Doors', 'Timber Alternative', 'Home Security', 'JSW Avante']
  },
  {
    id: 'fire-safety-compliance-nbc-2016',
    slug: 'understanding-fire-door-ratings-and-nbc-compliance',
    title: 'Understanding Fire Door Ratings: How to Ensure NBC 2016 Compliance for Hospitals & Towers',
    excerpt: 'A comprehensive technical overview of 60, 90, and 120-minute fire doors, intumescent seals, panic exit bars, and CBRI testing standards.',
    content: [
      'Fire safety compliance is a critical legal and human safety requirement in high-rise buildings, commercial centers, and hospitals. Under the National Building Code (NBC 2016), passive fire protection elements like certified fire doors play a decisive role in containing smoke and fire.',
      'How Fire Doors Work:\nWhen a fire breaks out, JSW Avante Fire Doors maintain structural integrity and prevent heat transfer. Filled with high-density mineral wool or rockwool and lined with intumescent seals, the seals expand rapidly when exposed to high heat, completely sealing gaps between frame and leaf to prevent toxic smoke spread.',
      'Key Fire Door Features to Look For:\n- CBRI or NABL Accredited Testing Certificates\n- Panic Push Bar hardware for effortless emergency evacuation\n- Self-closing hydraulic closers\n- Rated vision panels with wire-mesh heat-resistant glass.'
    ],
    author: 'Vikas Malhotra (Fire Safety Consultant)',
    date: 'June 24, 2026',
    category: 'Safety & Regulations',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    tags: ['Fire Doors', 'NBC Compliance', 'CBRI Certified', 'Building Safety']
  },
  {
    id: 'corrosion-resistant-coating-technology',
    slug: 'the-science-behind-galvanized-steel-anti-rust',
    title: 'The Science of "NOTHING CORRODES US": How JSW Coated Galvanized Steel Resists Corrosion',
    excerpt: 'Deep dive into the zinc galvanization, passivation layers, and UV powder coating that make Trimurti Enterprises doors 100% rustproof.',
    content: [
      'Corrosion is the biggest threat to metal structures in humid or coastal environments. JSW Steel Coated Products Limited uses state-of-the-art continuous galvanizing lines (CGL) to bond protective zinc coatings to high tensile steel.',
      'The Multi-Layer Protection Shield:\n1. Base High-Tensile Steel Core\n2. Hot-Dip Zinc Galvanized Layer (120-275 gsm)\n3. Chemical Passivation & Chromate Conversion Coating\n4. Primer Base Coat\n5. Thermosetting Polyester / UV-Resistant Wood Grain Finish',
      'This multi-stage barrier ensures that even under salt spray testing, coastal humidity, and rain, JSW Avante doors do not rust, blister, or degrade for decades.'
    ],
    author: 'Dr. Ananya Roy (Materials Scientist)',
    date: 'May 12, 2026',
    category: 'Technology & Science',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    tags: ['Galvanized Steel', 'Anti-Corrosion', 'JSW Coated Products', 'Materials Science']
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is the connection between Trimurti Enterprises and JSW Avante?',
    answer: 'Trimurti Enterprises is an official authorized partner, channel distributor, and specialized fabrication unit for JSW Avante Smart Steel Doors & Windows (manufactured using premium steel from JSW Steel Coated Products Limited).'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'Are JSW Avante steel doors completely termite proof and rust resistant?',
    answer: 'Yes! Unlike wooden doors which attract termites and absorb moisture, JSW Avante doors feature a 100% galvanized steel skin and synthetic/honeycomb infill that cannot harbor termites and will never rot, swell, or warp. The multi-layer zinc and polyester finish provides 100% anti-corrosion protection.'
  },
  {
    id: 'faq-3',
    category: 'Customization',
    question: 'Can steel doors look like real natural wood?',
    answer: 'Absolutely. Using advanced heat-transfer wood grain technology, JSW Avante embossed and plain doors are available in realistic wood finishes including Dark Walnut, Golden Oak, Teak Wood, Cherry Wood, and Mahogany. They deliver the luxury aesthetic of wood with the strength of steel.'
  },
  {
    id: 'faq-4',
    category: 'Fire Safety',
    question: 'Are your fire doors certified by recognized testing labs?',
    answer: 'Yes. Our commercial fire doors are fully tested and certified by CBRI (Central Building Research Institute) and NABL accredited testing facilities for 60-minute, 90-minute, and 120-minute fire ratings in compliance with IS 3614 and BS 476 standards.'
  },
  {
    id: 'faq-5',
    category: 'Installation & Maintenance',
    question: 'How are JSW Avante doors installed, and what maintenance do they require?',
    answer: 'Our professional technical team handles site measurement and anchor-bolt installation. Because they are factory pre-fitted with hinges and frames, installation takes less than 2 hours per door with minimal masonry dust. Maintenance is simple: clean with a damp cloth; no polishing or repainting is required.'
  },
  {
    id: 'faq-6',
    category: 'Ordering',
    question: 'Can I order custom sizes for my villa or commercial project?',
    answer: 'Yes, Trimurti Enterprises custom fabricates doors and sliding windows according to your exact architectural wall opening dimensions, hardware requirements, color shade, and glass specifications.'
  }
];
