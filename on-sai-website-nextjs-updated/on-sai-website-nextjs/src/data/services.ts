import type { LucideIcon } from 'lucide-react';
import { Cross, School, GraduationCap, ShoppingBag } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: Cross,
    title: 'Hospital Housekeeping',
    description:
      'Hygiene-first housekeeping built for medical and clinical environments — wards, OPDs, corridors, and common areas kept infection-control ready.',
    features: ['Hygiene Protocols', 'Trained for Healthcare', 'Round-the-Clock'],
  },
  {
    icon: School,
    title: 'School Housekeeping',
    description:
      'Clean, safe learning environments for classrooms, labs, playgrounds, and campuses — maintained on a dependable daily schedule.',
    features: ['Safe Chemicals', 'Scheduled Rounds', 'Child-Safe Practices'],
  },
  {
    icon: GraduationCap,
    title: 'College Housekeeping',
    description:
      'Reliable upkeep for lecture halls, hostels, libraries, and campus common areas — built for high-footfall academic institutions.',
    features: ['Campus-Wide Coverage', 'Hostel & Facility Care', 'Trained Staff'],
  },
  {
    icon: ShoppingBag,
    title: 'Mall Housekeeping',
    description:
      'Continuous upkeep for high-footfall shopping malls — atriums, walkways, washrooms, and food courts kept spotless for every visitor.',
    features: ['High Footfall Ready', 'Round-the-Clock', 'Guest-Ready Standards'],
  },
];
