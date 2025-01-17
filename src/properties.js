import AlexandraCourtTwoBrMain from './img/alexandra-courts/bedroom/2bedroom.jpg';
import AlexandraCourtThreeBrMain from './img/alexandra-courts/bedroom/3bedroom.jpg';
import AlexandraCourtFourBrMain from './img/alexandra-courts/bedroom/4bedroom.png';

import RenewedHopeTwoBrMain from './img/renewed-hope-estate/2-bedroom/1.jpg';
import RenewedHopeThreeBrMain from './img/renewed-hope-estate/3-bedroom/1.jpg';
import RenewedHopeFourBrMain from './img/renewed-hope-estate/4-bedroom/1.png';

import AlaroCityMain from './img/Alaro-city/1.png';
import AlaroCityMain2 from './img/Alaro-city/2.png';
import AlaroCityCommercialMain from './img/Alaro-city/commercial/1.png';
import AlaroCityIndustrialMain from './img/Alaro-city/commercial/2.png';

import BromptonCityMain from './img/lands/brompton-city.jpeg';
import SangotedoCityMain from './img/lands/sangotedo.jpeg';

import DantataGardens from './img/dantata-gardens/5bd.png';
import DantataGardens3 from './img/dantata-gardens/4bsd.png';
import DantataGardens2 from './img/dantata-gardens/4btd.png';
import DantataGardens4 from './img/dantata-gardens/bofs.png';

import LakeBohan from './img/lake-bohan/5bsd.png';
import LakeBohan2 from './img/lake-bohan/4btd.png';
import LakeBohan3 from './img/lake-bohan/3bof.png';

const properties = [
  {
    id: 1,
    name: 'Alexandra Courts',
    mainImage: AlexandraCourtTwoBrMain,
    type: '2 Bedroom Terrace with BQ',
    price: 0,
    location: 'Ibeju Lekki, Lagos state',
    mortgageAvailable: 'False',
    description:
      'Nestled in the heart of Ibeju Lekki’s Coastal City Residential Scheme, Alexandra Courts Coastal City offers an unparalleled opportunity to live, work, and thrive in the region famously dubbed “The New Lagos.” Strategically positioned within the New Town Development Hub of the Lekki Peninsula, our estate is a masterpiece of modern design and functionality, featuring a blend of 2-bedroom and 3-bedroom flats, as well as semi-detached and fully detached duplexes. Every unit is thoughtfully crafted to deliver ultimate comfort and sophistication to our residents.',
    otherImages: [],
  },
  {
    id: 2,
    name: 'Alexandra Courts',
    mainImage: AlexandraCourtThreeBrMain,
    type: '3 Bedroom Terrace with BQ',
    price: 70000000,
    location: 'Ibeju Lekki, Lagos state',
    mortgageAvailable: 'False',
    description:
      'Nestled in the heart of Ibeju Lekki’s Coastal City Residential Scheme, Alexandra Courts Coastal City offers an unparalleled opportunity to live, work, and thrive in the region famously dubbed “The New Lagos.” Strategically positioned within the New Town Development Hub of the Lekki Peninsula, our estate is a masterpiece of modern design and functionality, featuring a blend of 2-bedroom and 3-bedroom flats, as well as semi-detached and fully detached duplexes. Every unit is thoughtfully crafted to deliver ultimate comfort and sophistication to our residents.',
    otherImages: [],
  },
  {
    id: 3,
    name: 'Alexandra Courts',
    mainImage: AlexandraCourtFourBrMain,
    type: '4 Bedroom Manssionette with BQ',
    price: 85000000,
    location: 'Ibeju Lekki, Lagos state',
    mortgageAvailable: 'False',
    description:
      'Nestled in the heart of Ibeju Lekki’s Coastal City Residential Scheme, Alexandra Courts Coastal City offers an unparalleled opportunity to live, work, and thrive in the region famously dubbed “The New Lagos.” Strategically positioned within the New Town Development Hub of the Lekki Peninsula, our estate is a masterpiece of modern design and functionality, featuring a blend of 2-bedroom and 3-bedroom flats, as well as semi-detached and fully detached duplexes. Every unit is thoughtfully crafted to deliver ultimate comfort and sophistication to our residents.',
    otherImages: [],
  },
  {
    id: 4,
    name: 'Renewed Hope Estate',
    type: '2 Bedroom terrace',
    mainImage: RenewedHopeTwoBrMain,
    price: 36000000,
    location: 'Ibeju Lekki, Lagos state',
    mortgageAvailable: 'True',
    description:
      'Strategically located in Ibeju Lekki and developed in partnership with the Federal Mortgage Bank of Nigeria, Renewed Hope City is nestled within the New Town Development Hub of the Lekki Peninsula, aptly known as “The New Lagos.” This estate features a perfect blend of 2-bedroom and 3-bedroom flats alongside terrace duplexes, all tastefully designed for ultimate comfort. With its proximity to major commercial hubs and key infrastructure, Renewed Hope City offers unmatched economic, residential, and commercial value, making it the ideal destination for modern living.',
    otherImages: [],
  },
  {
    id: 5,
    name: 'Renewed Hope Estate',
    type: '3 Bedroom terrace',
    mainImage: RenewedHopeThreeBrMain,
    price: 48000000,
    location: 'Ibeju Lekki, Lagos state',
    mortgageAvailable: 'True',
    description:
      'Strategically located in Ibeju Lekki and developed in partnership with the Federal Mortgage Bank of Nigeria, Renewed Hope City is nestled within the New Town Development Hub of the Lekki Peninsula, aptly known as “The New Lagos.” This estate features a perfect blend of 2-bedroom and 3-bedroom flats alongside terrace duplexes, all tastefully designed for ultimate comfort. With its proximity to major commercial hubs and key infrastructure, Renewed Hope City offers unmatched economic, residential, and commercial value, making it the ideal destination for modern living.',
    otherImages: [],
  },
  {
    id: 6,
    name: 'Renewed Hope Estate',
    type: '4 Bedroom terrace duplex',
    mainImage: RenewedHopeFourBrMain,
    price: 85000000,
    location: 'Ibeju Lekki, Lagos state',
    mortgageAvailable: 'True',
    description:
      'Strategically located in Ibeju Lekki and developed in partnership with the Federal Mortgage Bank of Nigeria, Renewed Hope City is nestled within the New Town Development Hub of the Lekki Peninsula, aptly known as “The New Lagos.” This estate features a perfect blend of 2-bedroom and 3-bedroom flats alongside terrace duplexes, all tastefully designed for ultimate comfort. With its proximity to major commercial hubs and key infrastructure, Renewed Hope City offers unmatched economic, residential, and commercial value, making it the ideal destination for modern living.',
    otherImages: [],
  },
  {
    id: 7,
    name: 'Universal Homes',
    type: 'Apartments with Statndard View',
    mainImage: AlaroCityMain,
    price: 124000000,
    location: 'Lekki, Lagos state',
    mortgageAvailable: 'False',
    description:
      'Nestled in the heart of Alaro City Lagos, Universal Homes is a thoughtfully designed, family-friendly, master-planned community that sets the standard for contemporary living. Featuring 576 two-bedroom apartments, with the flexibility to expand into three or four bedrooms, this serene enclave combines modern elegance with tranquil surroundings. Residents enjoy a perfect balance of world-class amenities, innovative design, and Alaro City’s unwavering commitment to sustainability, greenery, and nature, creating a truly exceptional living experience.',
    otherImages: [],
  },
  {
    id: 8,
    name: 'Universal Homes',
    type: 'Apartments with Double Balcony View',
    mainImage: AlaroCityMain2,
    price: 142600000,
    location: 'Lekki, Lagos state',
    mortgageAvailable: 'False',
    description:
      'Nestled in the heart of Alaro City Lagos, Universal Homes is a thoughtfully designed, family-friendly, master-planned community that sets the standard for contemporary living. Featuring 576 two-bedroom apartments, with the flexibility to expand into three or four bedrooms, this serene enclave combines modern elegance with tranquil surroundings. Residents enjoy a perfect balance of world-class amenities, innovative design, and Alaro City’s unwavering commitment to sustainability, greenery, and nature, creating a truly exceptional living experience.',
    otherImages: [],
  },
  {
    id: 9,
    name: 'Universal City plots',
    type: 'Commercial Plots',
    mainImage: AlaroCityCommercialMain,
    price: 302303000,
    location: 'Lekki, Lagos state',
    mortgageAvailable: 'False',
    description:
      'Strategically located along the newly expanded Lekki-Epe Expressway, Alaro City Commercial Plots offer unmatched proximity to critical infrastructure, including the Lekki Deep Sea Port, the upcoming New Lagos International Airport, and the 4th Mainland Bridge. These commercial plots provide unparalleled connectivity, positioning your business at the heart of a rapidly growing economic hub. With an impressive projected ROI of 64% in just five years, investing in Alaro City Commercial plots is a gateway to both strategic growth and substantial returns.',
    otherImages: [],
  },
  {
    id: 10,
    name: 'Universal City plots',
    type: 'Industrial Plots',
    mainImage: AlaroCityIndustrialMain,
    price: 341060000,
    location: 'Lekki, Lagos state',
    mortgageAvailable: 'False',
    description:
      'Located along the newly upgraded Lekki-Epe Expressway, Alaro City industrial plots offer seamless access to key infrastructure such as the Lekki Deep Sea Port, the upcoming New Lagos International Airport, and the 4th Mainland Bridge. These plots are strategically designed to cater to industrial growth within a thriving economic hub, delivering an outstanding projected ROI of 95% within 5 years. Invest in these Industrial plots and secure your place in a future of unparalleled opportunities.',
    otherImages: [],
  },
  {
    id: 11,
    name: 'Brompton City plots',
    type: '300/400SQM Residential Plots',
    mainImage: BromptonCityMain,
    price: 88031100,
    location: 'Ogombo Road, Lekki Scheme II, Lagos state',
    mortgageAvailable: 'False',
    description:
      'Located along the newly upgraded Lekki-Epe Expressway, Brompton City Residential plots offer seamless access to key infrastructure such as the Lekki Deep Sea Port, the upcoming New Lagos International Airport, and the 4th Mainland Bridge. These plots are strategically designed to cater to industrial growth within a thriving economic hub, delivering an outstanding projected ROI of 95% within 5 years. Invest in these Industrial plots and secure your place in a future of unparalleled opportunities.',
    otherImages: [],
  },
  {
    id: 11,
    name: 'Brompton City plots',
    type: '550/600SQM Residential Plots',
    mainImage: BromptonCityMain,
    price: 167450800,
    location: 'Ogombo Road, Lekki Scheme II, Lagos state',
    mortgageAvailable: 'False',
    description:
      'Located along the newly upgraded Lekki-Epe Expressway, Brompton City Residential plots offer seamless access to key infrastructure such as the Lekki Deep Sea Port, the upcoming New Lagos International Airport, and the 4th Mainland Bridge. These plots are strategically designed to cater to industrial growth within a thriving economic hub, delivering an outstanding projected ROI of 95% within 5 years. Invest in these Industrial plots and secure your place in a future of unparalleled opportunities.',
    otherImages: [],
  },
  {
    id: 11,
    name: 'Brompton City plots',
    type: '900/1000SQM Residential Plots',
    mainImage: BromptonCityMain,
    price: 314397900,
    location: 'Ogombo Road, Lekki Scheme II, Lagos state',
    mortgageAvailable: 'False',
    description:
      'Located along the newly upgraded Lekki-Epe Expressway, Brompton City Residential plots offer seamless access to key infrastructure such as the Lekki Deep Sea Port, the upcoming New Lagos International Airport, and the 4th Mainland Bridge. These plots are strategically designed to cater to industrial growth within a thriving economic hub, delivering an outstanding projected ROI of 95% within 5 years. Invest in these Industrial plots and secure your place in a future of unparalleled opportunities.',
    otherImages: [],
  },
  {
    id: 12,
    name: 'Sangotedo City',
    type: '327.11SQM Residential Plots',
    mainImage: SangotedoCityMain,
    price: 67015350,
    location: 'Monastery Road, Sangotedo, Lekki, Lagos',
    mortgageAvailable: 'False',
    description:
      'Located along the newly upgraded Lekki-Epe Expressway, Sangotedo City Residential plots offer seamless access to key infrastructure such as the Lekki Deep Sea Port, the upcoming New Lagos International Airport, and the 4th Mainland Bridge. These plots are strategically designed to cater to industrial growth within a thriving economic hub, delivering an outstanding projected ROI of 95% within 5 years. Invest in these Industrial plots and secure your place in a future of unparalleled opportunities.',
    otherImages: [],
  },
  {
    id: 13,
    name: 'Dantata Gardens',
    type: '5 Bedroom Duplex Apartment',
    mainImage: DantataGardens,
    price: 99900000,
    location: 'Karsana, Abuja',
    mortgageAvailable: 'True',
    description:
      'Dantata Gardens is a premium estate in the serene neighborhood of Karsana, Abuja, offering a range of exquisitely designed homes, including 5 and 4-bedroom fully detached duplexes, 4-bedroom semi-detached duplexes, and 1, 2, and 3-bedroom flats. Perfectly blending luxury and functionality, the estate features contemporary architecture, lush landscaping, round-the-clock security, and family-friendly amenities. Located just minutes from the city center, Dantata Gardens provides a peaceful retreat with easy access to major roads and essential services, making it the ideal choice for modern living.',
    otherImages: [],
  },
  {
    id: 14,
    name: 'Dantata Gardens',
    type: '4 Bedroom Semi-Duplex Apartment',
    mainImage: DantataGardens2,
    price: 51100500,
    location: 'Karsana, Abuja',
    mortgageAvailable: 'True',
    description:
      'Dantata Gardens is a premium estate in the serene neighborhood of Karsana, Abuja, offering a range of exquisitely designed homes, including 5 and 4-bedroom fully detached duplexes, 4-bedroom semi-detached duplexes, and 1, 2, and 3-bedroom flats. Perfectly blending luxury and functionality, the estate features contemporary architecture, lush landscaping, round-the-clock security, and family-friendly amenities. Located just minutes from the city center, Dantata Gardens provides a peaceful retreat with easy access to major roads and essential services, making it the ideal choice for modern living.',
    otherImages: [],
  },
  {
    id: 15,
    name: 'Dantata Gardens',
    type: '4 Bed Terraced Duplex with BQ',
    mainImage: DantataGardens3,
    price: 46300500,
    location: 'Karsana, Abuja',
    mortgageAvailable: 'True',
    description:
      'Dantata Gardens is a premium estate in the serene neighborhood of Karsana, Abuja, offering a range of exquisitely designed homes, including 5 and 4-bedroom fully detached duplexes, 4-bedroom semi-detached duplexes, and 1, 2, and 3-bedroom flats. Perfectly blending luxury and functionality, the estate features contemporary architecture, lush landscaping, round-the-clock security, and family-friendly amenities. Located just minutes from the city center, Dantata Gardens provides a peaceful retreat with easy access to major roads and essential services, making it the ideal choice for modern living.',
    otherImages: [],
  },
  {
    id: 16,
    name: 'Dantata Gardens',
    type: '1,2,3 Bedroom Block of flats',
    mainImage: DantataGardens4,
    price: 46300500,
    location: 'Karsana, Abuja',
    mortgageAvailable: 'True',
    description:
      'Dantata Gardens is a premium estate in the serene neighborhood of Karsana, Abuja, offering a range of exquisitely designed homes, including 5 and 4-bedroom fully detached duplexes, 4-bedroom semi-detached duplexes, and 1, 2, and 3-bedroom flats. Perfectly blending luxury and functionality, the estate features contemporary architecture, lush landscaping, round-the-clock security, and family-friendly amenities. Located just minutes from the city center, Dantata Gardens provides a peaceful retreat with easy access to major roads and essential services, making it the ideal choice for modern living.',
    otherImages: [],
  },
  {
    id: 17,
    name: 'Lake Bohan Estate',
    type: '5 Bed Semi-detached Duplex',
    mainImage: LakeBohan,
    price: 80000000,
    location: 'Lokogoma, Abuja',
    mortgageAvailable: 'True',
    description:
      'Nestled in the heart of Lokogoma, Abuja, Lake Bohen Estate offers a harmonious blend of elegance and comfort with its 5 and 4-bedroom semi-detached duplexes and stylish 3-bedroom flats. Designed for modern living, the estate features contemporary architecture, secure gated access, and serene surroundings, making it an ideal haven for families and professionals. With easy access to major roads, schools, and shopping centers, Lake Bohen Estate combines convenience and tranquility to provide the perfect living experience.',
    otherImages: [],
  },
  {
    id: 18,
    name: 'Lake Bohan Estate',
    type: ' 4 Bedroom Terrace Duplex',
    mainImage: LakeBohan2,
    price: 70000000,
    location: 'Lokogoma, Abuja',
    mortgageAvailable: 'True',
    description:
      'Nestled in the heart of Lokogoma, Abuja, Lake Bohen Estate offers a harmonious blend of elegance and comfort with its 5 and 4-bedroom semi-detached duplexes and stylish 3-bedroom flats. Designed for modern living, the estate features contemporary architecture, secure gated access, and serene surroundings, making it an ideal haven for families and professionals. With easy access to major roads, schools, and shopping centers, Lake Bohen Estate combines convenience and tranquility to provide the perfect living experience.',
    otherImages: [],
  },
  {
    id: 19,
    name: 'Lake Bohan Estate',
    type: '3 Bedroom Block of flats',
    mainImage: LakeBohan3,
    price: 45000000,
    location: 'Lokogoma, Abuja',
    mortgageAvailable: 'True',
    description:
      'Nestled in the heart of Lokogoma, Abuja, Lake Bohen Estate offers a harmonious blend of elegance and comfort with its 5 and 4-bedroom semi-detached duplexes and stylish 3-bedroom flats. Designed for modern living, the estate features contemporary architecture, secure gated access, and serene surroundings, making it an ideal haven for families and professionals. With easy access to major roads, schools, and shopping centers, Lake Bohen Estate combines convenience and tranquility to provide the perfect living experience.',
    otherImages: [],
  },
];

export default properties;
