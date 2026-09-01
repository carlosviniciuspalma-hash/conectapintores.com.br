import type { LucideIcon } from 'lucide-react';
import {
  Award,
  BriefcaseBusiness,
  Brush,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Handshake,
  HelpCircle,
  Home,
  MapPin,
  MessageCircle,
  PaintBucket,
  PaintRoller,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Users,
} from 'lucide-react';

type NavItem = {
  label: string;
  href: string;
};

type MediaAsset = {
  src: string;
  alt: string;
  caption?: string;
};

type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

type Project = {
  name: string;
  category: string;
  description: string;
  imageLabel: string;
  icon: LucideIcon;
  media?: MediaAsset;
};

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  icon: LucideIcon;
};

type Faq = {
  question: string;
  answer: string;
  icon: LucideIcon;
};

const assetBase = '/assets/conecta-pintores';

export const media = {
  hero: {
    src: `${assetBase}/fachada-preta-rolo.jpeg`,
    alt: 'Profissional da Conecta Pintores aplicando pintura em fachada externa escura',
    caption: 'Registro real de obra externa com equipe identificada.',
  },
  founder: {
    src: `${assetBase}/founder-vinicius-palmas-camera.jpeg`,
    alt: 'Vinicius Palma segurando câmera ao lado da marca Conecta Pintores',
    caption: 'Vinicius Palma apresentando a Conecta Pintores com presença de marca e visão de comunicação.',
  },
  video: {
    src: `${assetBase}/bastidores-conecta-pintores.mp4`,
    alt: 'Video de bastidores da Conecta Pintores',
    caption: 'Bastidores reais da Conecta Pintores em obra.',
  },
} satisfies Record<string, MediaAsset>;

export const contact = {
  whatsappDisplay: '11 97698-2540',
  whatsappHref: 'https://wa.me/5511976982540',
  email: 'viniciuspalma82@hotmail.com',
  emailHref: 'mailto:viniciuspalma82@hotmail.com',
  brandInstagram: '@conecta.pintores',
  brandInstagramHref: 'https://www.instagram.com/conecta.pintores',
  founderInstagram: '@viniciuspalma.pintor',
  founderInstagramHref: 'https://www.instagram.com/viniciuspalma.pintor',
  region: '[Inserir cidade/região de atendimento]',
  painterFormHref: '#contato',
} satisfies Record<string, string>;

export const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Fundador', href: '#fundador' },
  { label: 'Ecossistema', href: '#ecossistema' },
  { label: 'Contato', href: '#contato' },
] satisfies NavItem[];

export const proofPoints = [
  {
    title: 'Atendimento próximo',
    description:
      'Um canal direto para entender o serviço, orientar os próximos passos e organizar a conversa inicial.',
    icon: MessageCircle,
  },
  {
    title: 'Pintura com método',
    description:
      'Organização do orçamento, preparação do ambiente e execução com atenção aos detalhes de cada obra.',
    icon: ClipboardCheck,
  },
  {
    title: 'Rede em construção',
    description:
      'A Conecta Pintores nasce para aproximar clientes, profissionais e parceiros do setor de pintura.',
    icon: Users,
  },
] satisfies IconCard[];

export const services = [
  {
    title: 'Pintura residencial',
    description:
      'Serviços para casas e apartamentos, com escopo definido a partir das necessidades de cada ambiente.',
    icon: Home,
  },
  {
    title: 'Pintura comercial',
    description:
      'Atendimento para lojas, escritórios e espaços comerciais que precisam renovar a apresentação do local.',
    icon: Store,
  },
  {
    title: 'Pintura corporativa',
    description:
      'Planejamento para empresas e operações que precisam alinhar prazo, organização e execução.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Acabamentos e repintura',
    description:
      'Apoio em correções, renovação de superfícies e definição de acabamento conforme o objetivo do projeto.',
    icon: PaintRoller,
  },
  {
    title: 'Preparação do ambiente',
    description:
      'Cuidado com briefing, proteção, etapas de serviço e entrega do espaço ao fim da pintura.',
    icon: ShieldCheck,
  },
  {
    title: 'Conexão com profissionais',
    description:
      'Um caminho para aproximar clientes de pintores e fortalecer oportunidades dentro da rede.',
    icon: Handshake,
  },
] satisfies IconCard[];

export const projects = [
  {
    name: 'Mercado Marcadista',
    category: 'Projeto comercial',
    description:
      'Registro de galpão comercial com pintura em grande escala e contraste forte entre amarelo e grafite.',
    imageLabel: 'Foto real de galpão comercial',
    icon: Store,
    media: {
      src: `${assetBase}/galpao-amarelo-obra.jpeg`,
      alt: 'Galpão comercial amplo com pintura amarela e faixa grafite',
    },
  },
  {
    name: 'Escritório do Grupo ICF',
    category: 'Projeto corporativo',
    description:
      'Ambiente corporativo com acabamento interno, textura cimentícia e cuidado com iluminação e detalhes.',
    imageLabel: 'Foto real de ambiente corporativo',
    icon: BriefcaseBusiness,
    media: {
      src: `${assetBase}/studio-cimento-queimado-amplo.jpeg`,
      alt: 'Ambiente interno corporativo com parede em textura de cimento queimado',
    },
  },
  {
    name: 'Pintura relacionada ao Medina',
    category: 'Projeto especial',
    description:
      'Registro externo em fachada escura com equipe identificada. Detalhes finais podem ser editados após confirmação.',
    imageLabel: 'Foto real de projeto especial',
    icon: Award,
    media: {
      src: `${assetBase}/fachada-preta-uniforme.jpeg`,
      alt: 'Profissional da Conecta Pintores trabalhando em fachada externa escura',
    },
  },
  {
    name: 'Projeto residencial',
    category: 'Residencial',
    description:
      'Acabamento interno residencial com paleta neutra, iluminação instalada e ambiente em fase final de obra.',
    imageLabel: 'Foto real de projeto residencial',
    icon: Home,
    media: {
      src: `${assetBase}/residencial-acabamento-cinza.jpeg`,
      alt: 'Sala residencial com pintura cinza e iluminação decorativa',
    },
  },
  {
    name: 'Acabamento decorativo',
    category: 'Comercial',
    description:
      'Parede com textura e acabamento decorativo para reforçar personalidade do espaço.',
    imageLabel: 'Foto real de acabamento decorativo',
    icon: Building2,
    media: {
      src: `${assetBase}/parede-decorativa-texturizada.jpeg`,
      alt: 'Parede interna com acabamento decorativo texturizado',
    },
  },
  {
    name: 'Detalhes de acabamento',
    category: 'Corporativo',
    description:
      'Registro de acabamento em ambiente interno com foco em textura, iluminação e apresentação final.',
    imageLabel: 'Foto real de acabamento interno',
    icon: BriefcaseBusiness,
    media: {
      src: `${assetBase}/studio-cimento-queimado-luzes.jpeg`,
      alt: 'Detalhe de acabamento interno em textura de cimento queimado com luminárias',
    },
  },
] satisfies Project[];

export const ecosystem = [
  {
    title: 'Clientes',
    description:
      'Pessoas e empresas que buscam orientação, orçamento e execução para serviços de pintura.',
    icon: Users,
  },
  {
    title: 'Pintores',
    description:
      'Profissionais interessados em se conectar à rede e acompanhar futuras oportunidades.',
    icon: Brush,
    href: contact.painterFormHref,
  },
  {
    title: 'Lojistas',
    description:
      'Parceiros comerciais que podem se aproximar de clientes e profissionais do setor de pintura.',
    icon: ShoppingBag,
  },
  {
    title: 'Fabricantes',
    description:
      'Marcas e fornecedores que fazem parte da cadeia de tintas, ferramentas e soluções para pintura.',
    icon: Factory,
  },
] satisfies IconCard[];

export const socialProof = [
  {
    quote: 'Depoimento autorizado de cliente será inserido aqui.',
    author: '[Inserir nome autorizado]',
    role: '[Inserir projeto ou contexto]',
    icon: CheckCircle2,
  },
  {
    quote: 'Depoimento autorizado de profissional parceiro será inserido aqui.',
    author: '[Inserir nome autorizado]',
    role: '[Inserir atuação]',
    icon: PaintBucket,
  },
  {
    quote: 'Registro autorizado de experiência com a Conecta Pintores será inserido aqui.',
    author: '[Inserir referência autorizada]',
    role: '[Inserir contexto]',
    icon: Sparkles,
  },
] satisfies Testimonial[];

export const fieldGallery = [
  {
    src: `${assetBase}/fachada-preta-aplicacao-costas.jpeg`,
    alt: 'Profissional com uniforme da Conecta Pintores aplicando tinta em fachada externa',
    caption: 'Aplicação externa com uniforme da marca.',
  },
  {
    src: `${assetBase}/galpao-amarelo-obra.jpeg`,
    alt: 'Galpão comercial amplo em obra com pintura amarela e faixa grafite',
    caption: 'Aplicação comercial em grande escala.',
  },
  {
    src: `${assetBase}/residencial-acabamento-cinza.jpeg`,
    alt: 'Ambiente residencial com pintura cinza e iluminação decorativa',
    caption: 'Registro de acabamento interno.',
  },
] satisfies MediaAsset[];

export const faqs = [
  {
    question: 'Como solicito um orçamento?',
    answer:
      'Entre em contato pelo WhatsApp e envie as informações do ambiente, prazo desejado e tipo de pintura.',
    icon: MessageCircle,
  },
  {
    question: 'Qual região a Conecta Pintores atende?',
    answer: `A região de atendimento será confirmada em breve: ${contact.region}.`,
    icon: MapPin,
  },
  {
    question: 'Sou pintor. Como faço para participar?',
    answer:
      'Use o contato indicado nesta página para demonstrar interesse e receber as próximas orientações.',
    icon: PaintRoller,
  },
  {
    question: 'A Conecta Pintores conecta outros parceiros do setor?',
    answer:
      'A proposta inclui aproximação gradual com clientes, pintores, lojistas e fabricantes conforme a rede evolui.',
    icon: HelpCircle,
  },
] satisfies Faq[];

export const footerLinks = [
  'Início',
  'Sobre',
  'Projetos',
  'Fundador',
  'Ecossistema',
  'Contato',
] satisfies string[];
