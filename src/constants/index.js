export const MENU_ITEMS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "sponsors", label: "Sponsors", href: "#sponsors" },
  { id: "highlights", label: "Highlights", href: "#highlights" },
  { id: "locations", label: "Locations", href: "#locations" },
  { id: "format-events", label: "Format Events", href: "#format-events" },
];

export const BRAND_LOGO = "/images/cyber-attack.svg";
export const BRAND_LOGO_WHITE = "/images/cyber-attack-white.svg";
export const SPEED_PARTNERS_MARQUEE = 300000; // kecepatan scroll (ms)
export const LINK_REGISTER =
  " https://event.thetehgroup.com/cyberattack-nexus-manila-2025-the-offsite-retreat-/overview?token=ZT1jNmI4M2RjYS0zMTIzLTRhNmEtYTI1Zi04NDdmYjdlMDdhNTQ%3d";
export const TEASER_URL =
  "https://cyberattack-event.com/wp-content/uploads/2024/10/CA-MY-EVENT-DRAFT-2.mp4";

export const TEASER_URL_2 =
  "https://cyberattack-event.com/wp-content/uploads/2024/03/Cyberattack-Nexus_3-1.mp4";

export const GALLERY = [
  { src: "/images/gallery/ev1.png", alt: "Keynote session" },
  { src: "/images/gallery/ev2.png", alt: "Panel discussion" },
  { src: "/images/gallery/ev3.png", alt: "Live demo" },
  { src: "/images/gallery/ev4.png", alt: "Networking session" },
  { src: "/images/gallery/ev5.png", alt: "Audience engagement" },
  { src: "/images/gallery/ev6.png", alt: "Closing remarks" },
];

export const GALLERY_ID = [
  { src: "/images/gallery/id1.png", alt: "Indonesia 1" },
  { src: "/images/gallery/id2.png", alt: "Indonesia 2" },
  { src: "/images/gallery/id3.png", alt: "Indonesia 3" },
  { src: "/images/gallery/id4.png", alt: "Indonesia 4" },
  { src: "/images/gallery/id5.png", alt: "Indonesia 5" },
  { src: "/images/gallery/id6.png", alt: "Indonesia 6" },
  { src: "/images/gallery/id7.png", alt: "Indonesia 7" },
  { src: "/images/gallery/id8.png", alt: "Indonesia 8" },
];

export const GALLERY_SG = [
  { src: "/images/gallery/sg1.png", alt: "Singapore 1" },
  { src: "/images/gallery/sg2.png", alt: "Singapore 2" },
  { src: "/images/gallery/sg3.png", alt: "Singapore 3" },
];

export const GALLERY_HK = [
  { src: "/images/gallery/hk1.png", alt: "Hong Kong 1" },
  { src: "/images/gallery/hk2.png", alt: "Hong Kong 2" },
  { src: "/images/gallery/hk3.png", alt: "Hong Kong 3" },
  { src: "/images/gallery/hk4.png", alt: "Hong Kong 4" },
  { src: "/images/gallery/hk5.png", alt: "Hong Kong 5" },
  { src: "/images/gallery/hk6.png", alt: "Hong Kong 6" },
];

export const GALLERY_MY = [
  { src: "/images/gallery/my1.png", alt: "Malaysia 1" },
  { src: "/images/gallery/my2.png", alt: "Malaysia 2" },
  { src: "/images/gallery/my3.png", alt: "Malaysia 3" },
  { src: "/images/gallery/my4.png", alt: "Malaysia 4" },
  { src: "/images/gallery/my5.png", alt: "Malaysia 5" },
  { src: "/images/gallery/my6.png", alt: "Malaysia 6" },
  { src: "/images/gallery/my7.png", alt: "Malaysia 7" },
  { src: "/images/gallery/my8.png", alt: "Malaysia 8" },
];

export const GALLERY_COLLAB = [
  { src: "/images/gallery/co1.png", alt: "Collaboration 1" },
  { src: "/images/gallery/co2.png", alt: "Collaboration 2" },
  { src: "/images/gallery/co3.png", alt: "Collaboration 3" },
  { src: "/images/gallery/co4.png", alt: "Collaboration 4" },
  { src: "/images/gallery/co5.png", alt: "Collaboration 5" },
  { src: "/images/gallery/co6.png", alt: "Collaboration 6" },
];

export const PAST_EVENTS = [
  {
    id: "id",
    flag: "🇮🇩",
    title: "NEXUS 2025",
    date: "20–21 February | Indonesia",
    nums: [
      { value: "90+", label: "Cybersecurity and IT Professionals joined" },
      { value: "8", label: "Live demo by a leading technology company" },
      { value: "4", label: "Roundtable Discussion" },
    ],
    topGradient: "from-amber-200 to-amber-50",
    bottomGradient: "from-amber-600 to-amber-500",
    gallery: GALLERY_ID,
  },
  {
    id: "sg",
    flag: "🇸🇬",
    title: "NEXUS 2025",
    date: "20–21 March | Singapore",
    nums: [
      { value: "80+", label: "Cybersecurity and IT Professionals joined" },
      { value: "10", label: "Live demo by a leading technology company" },
      { value: "4", label: "Roundtable Discussion" },
    ],
    topGradient: "from-slate-50 to-white",
    bottomGradient: "from-slate-700 to-slate-800",
    gallery: GALLERY_SG,
  },
  {
    id: "hk",
    flag: "🇭🇰",
    title: "NEXUS 2025",
    date: "21 May | Hong Kong",
    nums: [
      { value: "3000", label: "Cybersecurity and IT Professionals joined" },
      { value: "58", label: "Live demo by a leading technology company" },
      { value: "4", label: "Roundtable Discussion" },
    ],
    topGradient: "from-red-50 to-white",
    bottomGradient: "from-red-600 to-red-500",
    gallery: GALLERY_HK,
  },
  {
    id: "my",
    flag: "🇲🇾",
    title: "NEXUS 2025",
    date: "21-23 August | Penang | Malaysia",
    nums: [
      { value: "100+", label: "Cybersecurity and IT Professionals joined" },
      { value: "12", label: "Live demo by a leading technology company" },
      { value: "5", label: "Roundtable Discussion" },
    ],
    topGradient: "from-green-50 to-white",
    bottomGradient: "from-green-600 to-green-500",
    gallery: GALLERY_MY,
  },
];

export const SPONSORS = [
  {
    src: "/images/sponsors/sponsor-senate.svg",
    alt: "Senate of the Philippines",
  },
  { src: "/images/sponsors/sponsor-finance.png", alt: "Department of Finance" },
  {
    src: "/images/sponsors/sponsor-maharlika.svg",
    alt: "Maharlika Investment Corporation",
  },
];

export const PARTNERS = [
  { src: "/images/sponsors/akamai.png", alt: "Akamai" },
  { src: "/images/sponsors/alibaba.png", alt: "Alibaba" },
  { src: "/images/sponsors/aws.png", alt: "AWS" },
  { src: "/images/sponsors/cintegrity.png", alt: "Cintegrity" },
  { src: "/images/sponsors/cloudflare.png", alt: "Cloudflare" },
  { src: "/images/sponsors/coupa.png", alt: "Coupa" },
  { src: "/images/sponsors/fortinet.png", alt: "Fortinet" },
  { src: "/images/sponsors/googlecloud.png", alt: "Google Cloud" },
  { src: "/images/sponsors/ibm.png", alt: "IBM" },
  { src: "/images/sponsors/infoblox.png", alt: "Infoblox" },
  { src: "/images/sponsors/nutanix.png", alt: "Nutanix" },
  { src: "/images/sponsors/paypal.webp", alt: "PayPal" },
  { src: "/images/sponsors/pwc.svg", alt: "PwC" },
  { src: "/images/sponsors/searce.png", alt: "Searce" },
  { src: "/images/sponsors/senitalone.png", alt: "SentinelOne" },
  { src: "/images/sponsors/servicenow.png", alt: "ServiceNow" },
  { src: "/images/sponsors/ssc.png", alt: "SSC" },
  { src: "/images/sponsors/trend.png", alt: "Trend Micro" },
];

export const EMAIL = "hello@nthetehgroup.com";
export const MAILTO_URL = `mailto:${EMAIL}?subject=Inquiry%20about%20NEXUS%20Summit&body=Hi%20NEXUS%20Summit%20Team%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20event.%0A%0ARegards%2C`;
export const PHONE = "+60 18-219 8127";
