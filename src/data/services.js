import { 
  GiSkullCrossedBones, 
  GiRose, 
  GiFeather, 
  GiDragonHead, 
  GiPaintBrush, 
  GiAngelWings 
} from 'react-icons/gi';

export const services = [
  {
    id: 'blackwork',
    title: 'Blackwork',
    description: 'Diseños audaces en tinta negra pura. Geometría, mandalas y arte tribal con contraste dramático.',
    icon: GiSkullCrossedBones,
    gradient: 'from-zinc-900 to-black',
  },
  {
    id: 'realismo',
    title: 'Realismo',
    description: 'Retratos fotorrealistas y escenas hiperrealistas que capturan cada detalle con precisión milimétrica.',
    icon: GiRose,
    gradient: 'from-gray-800 to-gray-900',
  },
  {
    id: 'fineline',
    title: 'Fine Line',
    description: 'Líneas delicadas y minimalistas. Elegancia sutil para diseños refinados y atemporales.',
    icon: GiFeather,
    gradient: 'from-slate-800 to-slate-900',
  },
  {
    id: 'anime',
    title: 'Anime & Manga',
    description: 'Personajes vibrantes con estilo japonés. Color explosivo y energía dinámica en cada trazo.',
    icon: GiDragonHead,
    gradient: 'from-zinc-800 to-black',
  },
  {
    id: 'color',
    title: 'Color Vibrante',
    description: 'Explosiones de color que capturan la atención. Técnicas avanzadas de sombreado y saturación.',
    icon: GiPaintBrush,
    gradient: 'from-gray-900 to-zinc-900',
  },
  {
    id: 'oldschool',
    title: 'Old School',
    description: 'Clásicos atemporales con líneas gruesas y paleta tradicional. El estilo que nunca pasa de moda.',
    icon: GiAngelWings,
    gradient: 'from-neutral-900 to-black',
  },
];
