export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 2500, suffix: '+', label: 'Projects Completed' },
  { value: 1000, suffix: '+', label: 'Happy Customers' },
  { value: 50, suffix: '+', label: 'Professional Staff' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { value: 13, suffix: '+', label: 'Years Experience' },
];
