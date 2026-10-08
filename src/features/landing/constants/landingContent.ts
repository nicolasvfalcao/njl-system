import type { ProcessStep, Project, Service } from '@/features/landing/types';

export const navigation = [
  { label: 'SERVIÇOS', href: '#servicos' },
  { label: 'PROCESSO', href: '#processo' },
  { label: 'PORTFÓLIO', href: '#portfolio' },
  { label: 'CONTATO', href: '#contato' },
];

export const services: Service[] = [
  {
    title: 'Desenvolvimento',
    description:
      'Código limpo, escalável e seguro. Aplicações web e mobile com altaperformance e tecnologia de ponta.',
    iconSrc: '/icontype.svg',
  },
  {
    title: 'UI/UX Design',
    description:
      'Experiências intuitivas que conectam usuários ao que realmente importa. Pesquisa, prototipação e design centrado em pessoas.',
    iconSrc: '/iconUx.svg',
    iconFrameSrc: '/Retângulo.svg',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Descoberta',
    description: 'Entendemos o problema, objetivos e o contexto do seu negócio.',
  },
  {
    number: '02',
    title: 'Estratégia',
    description: 'Definimos a solução ideal com foco em valor, viabilidade e experiência.',
  },
  {
    number: '03',
    title: 'Protótipo',
    description: 'Criamos interfaces intuitivas e protótipos validados com usuários reais.',
  },
  {
    number: '04',
    title: 'Desenvolvimento',
    description: 'Transformamos o design em código de alta qualidade com hagilidade e segurança.',
  },
  { number: '05', title: 'Entregah', description: 'Entregamos, acompanhamos resultados e evoluímos continuamente.' },
];

export const projects: Project[] = [
  {
    title: 'Case #1',
    category: 'PLATAFORMA WEB',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
    accent: 'from-[#c9ff35]/25 via-[#12170b] to-black',
  },
  {
    title: 'Case #2',
    category: 'APP MOBILE',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
    accent: 'from-white/15 via-[#111] to-black',
  },
  {
    title: 'Case #3',
    category: 'E-COMMERCE',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
    accent: 'from-[#6a7d36]/25 via-[#10120d] to-black',
  },
];
