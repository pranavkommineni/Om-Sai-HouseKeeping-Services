export interface GalleryImage {
  src: string;
  category: 'leadership' | 'team';
  label: string;
  sub?: string;
  featured?: boolean;
  size?: 'lg' | 'tall' | 'wide' | 'md';
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/assets/ceo-solo.jpeg',
    category: 'leadership',
    label: 'Founder & CEO',
    sub: 'Leading Om Sai from the front since 2013',
    featured: true,
  },
  {
    src: '/assets/ceo-team.jpeg',
    category: 'leadership',
    label: 'Leadership with the Team',
    size: 'lg',
  },
  {
    src: '/assets/team-wide-2.jpeg',
    category: 'team',
    label: 'Professional Service in Action',
    size: 'wide',
  },
  {
    src: '/assets/team-wide-1.jpeg',
    category: 'team',
    label: 'Our Housekeeping Team',
    size: 'wide',
  },
];
