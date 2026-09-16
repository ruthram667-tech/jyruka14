export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  displayPhone: string;
  phoneHref: string;
  whatsappHref: string;
  instagram: {
    url: string;
    handle: string;
  };
  address: string;
  city: string;
  state: string;
  pincode: string;
  hqLocation: string;
  responseTime: string;
}

export const COMPANY_INFO: CompanyInfo = {
  name: 'Jyruka',
  tagline: 'High-Velocity Website Development Squads & Digital Solutions',
  description:
    'Jyruka connects fast-moving founders and enterprises with vetted senior engineering, UI/UX design, growth marketing, and automation squads.',
  email: 'jyrukaofficial@gmail.com',
  phone: '9363931903',
  displayPhone: '+91 93639 31903',
  phoneHref: 'tel:9363931903',
  whatsappHref:
    'https://wa.me/919363931903?text=Hi%20Jyruka%20Team%2C%20I%20would%20like%20to%20inquire%20about%20hiring%20a%20squad.',
  instagram: {
    url: 'https://www.instagram.com/jyruka_official?stkn=MTlvbjJ5M3NoYmRrcg==',
    handle: '@jyruka_official',
  },
  address: 'Thalavapalayam, Karur, Tamil Nadu 639113',
  city: 'Karur',
  state: 'Tamil Nadu',
  pincode: '639113',
  hqLocation: 'Thalavapalayam, Karur, Tamil Nadu 639113',
  responseTime: 'Under 2 hours',
};
