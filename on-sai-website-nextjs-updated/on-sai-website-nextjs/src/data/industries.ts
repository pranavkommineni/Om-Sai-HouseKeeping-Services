import type { LucideIcon } from 'lucide-react';
import { Cross, School, GraduationCap, ShoppingBag } from 'lucide-react';

export interface Industry {
  icon: LucideIcon;
  name: string;
  description: string;
}

export const industries: Industry[] = [
  {
    icon: Cross,
    name: 'Hospitals',
    description: 'Wards, OPDs & clinical spaces',
  },
  {
    icon: School,
    name: 'Schools',
    description: 'Classrooms & campus grounds',
  },
  {
    icon: GraduationCap,
    name: 'Colleges',
    description: 'Lecture halls, hostels & libraries',
  },
  {
    icon: ShoppingBag,
    name: 'Shopping Malls',
    description: 'Atriums, walkways & food courts',
  },
];
