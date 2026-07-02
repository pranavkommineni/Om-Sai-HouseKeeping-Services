export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Book Your Service', description: 'Reach out via call, WhatsApp, or the form.' },
  { number: '02', title: 'Site Inspection', description: 'We assess your space and requirements.' },
  { number: '03', title: 'Customized Plan', description: 'A cleaning plan tailored to your space.' },
  { number: '04', title: 'Professional Cleaning', description: 'Trained staff carry out the service.' },
  { number: '05', title: 'Quality Inspection', description: 'We check every corner before sign-off.' },
  { number: '06', title: 'Customer Satisfaction', description: 'Your feedback confirms the job is done right.' },
];
