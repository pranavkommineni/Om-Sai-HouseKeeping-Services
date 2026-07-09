export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Dr. Ramesh Naidu',
    role: 'Administrator, Multi-Speciality Hospital',
    quote:
      'Om Sai keeps our wards and OPD areas spotless every single day. Their hygiene discipline gives our patients and staff real peace of mind.',
    rating: 5,
  },
  {
    name: 'Priya Reddy',
    role: 'Principal, Higher Secondary School',
    quote:
      'Our campus has never looked better. The team is punctual, thorough, and great with maintaining safe, child-friendly cleaning practices.',
    rating: 5,
  },
  {
    name: 'Suresh Kumar',
    role: 'Facility Head, Degree College',
    quote:
      'From lecture halls to hostels, Om Sai handles our entire campus reliably. Fair pricing and consistent quality every visit.',
    rating: 5,
  },
  {
    name: 'Lakshmi Devi',
    role: 'Operations Manager, Shopping Mall',
    quote:
      'High footfall never slows them down. Walkways, washrooms, and food courts stay spotless all day, every day.',
    rating: 5,
  },
];
