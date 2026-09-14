import type { ProcessStep, Project, Service } from '@/features/landing/types';

export const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Portfólio', href: '#portfolio' },
];

export const services: Service[] = [
  {
    title: 'Desenvolvimento web',
    description:
      'Sites e plataformas rápidos, responsivos e preparados para transformar visitas em oportunidades.',
    iconSrc: '/icontype.svg',
  },
  {
    title: 'UI/UX Design',
    description:
      'Interfaces claras e marcantes, construídas a partir da estratégia e das necessidades do seu público.',
    iconSrc: '/iconUx.svg',
    iconFrameSrc: '/Retângulo.svg',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Descoberta',
    description: 'Entendemos o desafio e os objetivos.',
  },
  {
    number: '02',
    title: 'Estratégia',
    description: 'Definimos o melhor caminho para o produto.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Criamos uma experiência útil e memorável.',
  },
  {
    number: '04',
    title: 'Desenvolvimento',
    description: 'Transformamos o conceito em tecnologia.',
  },
  { number: '05', title: 'Evolução', description: 'Medimos, aprendemos e aprimoramos.' },
];

export const projects: Project[] = [
  {
    title: 'Domini',
    category: 'Produto digital',
    description:
      'Uma experiência digital completa para fortalecer comunidade e propósito.',
    accent: 'from-[#c9ff35]/25 via-[#12170b] to-black',
  },
  {
    title: 'NJL Dashboard',
    category: 'Sistema web',
    description:
      'Dados essenciais organizados em uma interface objetiva para decisões mais rápidas.',
    accent: 'from-white/15 via-[#111] to-black',
  },
  {
    title: 'Commerce Lab',
    category: 'E-commerce',
    description:
      'Jornada de compra fluida, performance sólida e identidade visual consistente.',
    accent: 'from-[#6a7d36]/25 via-[#10120d] to-black',
  },
];
