import pothos from '../assets/pothos.jpg';
import sansevieria from '../assets/sansevieria.jpg';
import chlorophytum from '../assets/chlorophytum.webp';
import spathiphyllum from '../assets/spathiphyllum.webp';
import dracaena from '../assets/dracaena.jpg';
import succulents from '../assets/succulents.jpg';
import bonsai from '../assets/bonsai.jpg';

export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  tagline: string;
  image: string;
  careLevel: 'Fácil' | 'Medio' | 'Avanzado';
  light: string;
  water: string;
  waterDays: string;
  benefits: string[];
  personality: string;
  mood: string;
  tags: string[];
  description: string;
  color: string;
  cubicleScore: number;
  stressRelief: number;
  productivity: number;
  airQuality: number;
}

export const plants: Plant[] = [
  {
    id: 'pothos',
    name: 'Teléfono',
    scientificName: 'Epipremnum aureum',
    tagline: 'El filtro natural de tu espacio',
    image: pothos,
    careLevel: 'Fácil',
    light: 'Indirecta / Artificial',
    water: 'Cada 7–10 días',
    waterDays: '7-10',
    benefits: ['Filtra toxinas del aire', 'Crecimiento rápido', 'Muy resistente', 'Ideal para colgar'],
    personality: 'Adaptable y resiliente — igual que tú en época de exámenes.',
    mood: 'Relajante',
    tags: ['Bajo mantenimiento', 'Purifica aire', 'Sin luz solar'],
    description: 'Excelente filtro natural de toxinas ambientales. Su rápido follaje colgante aporta vitalidad inmediata al espacio de trabajo.',
    color: '#4ade80',
    cubicleScore: 98,
    stressRelief: 85,
    productivity: 78,
    airQuality: 92,
  },
  {
    id: 'sansevieria',
    name: 'Lengua de Suegra',
    scientificName: 'Sansevieria trifasciata',
    tagline: 'La guerrera del oxígeno nocturno',
    image: sansevieria,
    careLevel: 'Fácil',
    light: 'Directa a Artificial',
    water: 'Cada 14–21 días',
    waterDays: '14-21',
    benefits: ['Oxigena espacios cerrados', 'Extremadamente resistente', 'Produce O2 de noche', 'Bajo riego'],
    personality: 'Estoica y poderosa — no necesita atención constante para brillar.',
    mood: 'Energizante',
    tags: ['Mínimo riego', 'Oxigenante', 'Baja luz'],
    description: 'Altamente eficiente oxigenando espacios cerrados. Destaca por su resistencia extrema en áreas con ventilación limitada.',
    color: '#22c55e',
    cubicleScore: 95,
    stressRelief: 70,
    productivity: 88,
    airQuality: 96,
  },
  {
    id: 'chlorophytum',
    name: 'Malamadre / Lazo de Amor',
    scientificName: 'Chlorophytum comosum',
    tagline: 'La renovadora del ambiente',
    image: chlorophytum,
    careLevel: 'Fácil',
    light: 'Artificial o Indirecta',
    water: 'Cada 7–10 días',
    waterDays: '7-10',
    benefits: ['Renueva el aire estancado', 'Forma cascada visual', 'Ideal para repisas', 'Muy adaptable'],
    personality: 'Generosa y expansiva — siempre lista para llenar el espacio de vida.',
    mood: 'Relajante',
    tags: ['Purifica aire', 'Decorativa', 'Colgante'],
    description: 'Destaca por su capacidad para renovar el aire estancado. Su forma en cascada optimiza visualmente repisas o estantes altos.',
    color: '#86efac',
    cubicleScore: 90,
    stressRelief: 80,
    productivity: 72,
    airQuality: 88,
  },
  {
    id: 'spathiphyllum',
    name: 'Cuna de Moisés',
    scientificName: 'Spathiphyllum wallisii',
    tagline: 'La indicadora que cuida sola',
    image: spathiphyllum,
    careLevel: 'Fácil',
    light: 'Artificial / Muy poca luz',
    water: 'Cada 7 días',
    waterDays: '7',
    benefits: ['Adaptable a la sombra', 'Indicador visual de agua', 'Purifica el aire', 'Floración decorativa'],
    personality: 'Comunicativa e intuitiva — te avisa cuando necesita atención.',
    mood: 'Relajante',
    tags: ['Muy poca luz', 'Indicador natural', 'Floración'],
    description: 'Sobresaliente por su adaptabilidad a la sombra profunda y sirve como indicador visual, ya que sus hojas avisan cuando necesita agua.',
    color: '#d1fae5',
    cubicleScore: 96,
    stressRelief: 92,
    productivity: 75,
    airQuality: 85,
  },
  {
    id: 'dracaena',
    name: 'Palo de Brasil',
    scientificName: 'Dracaena fragrans',
    tagline: 'El pulmón verde de tu cubículo',
    image: dracaena,
    careLevel: 'Medio',
    light: 'Artificial baja a Indirecta',
    water: 'Cada 10–14 días',
    waterDays: '10-14',
    benefits: ['Actúa como pulmón verde', 'Crecimiento vertical', 'No estorba el escritorio', 'Elegante'],
    personality: 'Elegante y vertical — ocupa poco espacio pero tiene gran presencia.',
    mood: 'Equilibrado',
    tags: ['Vertical', 'Purifica aire', 'Bajo mantenimiento'],
    description: 'Actúa como un pulmón verde dentro de la oficina. Su estructura de crecimiento vertical evita que estorbe en escritorios con espacio reducido.',
    color: '#16a34a',
    cubicleScore: 88,
    stressRelief: 75,
    productivity: 82,
    airQuality: 90,
  },
  {
    id: 'succulents',
    name: 'Suculentas',
    scientificName: 'Echeveria / Sedum spp.',
    tagline: 'La minimalista de bajo mantenimiento',
    image: succulents,
    careLevel: 'Fácil',
    light: 'Buena luz directa',
    water: 'Cada 15–20 días',
    waterDays: '15-20',
    benefits: ['Mínimo mantenimiento', 'Ideal para agendas saturadas', 'Gran variedad estética', 'Muy durables'],
    personality: 'Independiente y artística — perfecta para quienes tienen poco tiempo.',
    mood: 'Energizante',
    tags: ['Mínimo riego', 'Decorativa', 'Luz directa'],
    description: 'Opciones de muy bajo mantenimiento, ideales para colaboradores con agendas saturadas pero que cuentan con excelente entrada de sol.',
    color: '#bbf7d0',
    cubicleScore: 82,
    stressRelief: 65,
    productivity: 70,
    airQuality: 60,
  },
  {
    id: 'bonsai',
    name: 'Árbol de la Abundancia',
    scientificName: 'Pachira aquatica',
    tagline: 'La esencia del equilibrio natural',
    image: bonsai,
    careLevel: 'Medio',
    light: 'Luz natural indirecta',
    water: 'Cada 10–14 días',
    waterDays: '10-14',
    benefits: ['Compacta y estética', 'Toque natural elegante', 'No satura el espacio', 'Símbolo de prosperidad'],
    personality: 'Serena y equilibrada — aporta armonía sin saturar el espacio.',
    mood: 'Relajante',
    tags: ['Decorativa', 'Compacta', 'Luz indirecta'],
    description: 'Especie sumamente compacta y estética que aporta un toque natural sin invadir ni saturar el área de trabajo individual.',
    color: '#4ade80',
    cubicleScore: 85,
    stressRelief: 88,
    productivity: 76,
    airQuality: 78,
  },
];

export const quizQuestions = [
  {
    id: 1,
    question: '¿Cuánto tiempo pasas en tu cubículo diariamente?',
    options: [
      { label: 'Menos de 2 horas', value: 'low', icon: '⏱' },
      { label: '2 a 4 horas', value: 'medium', icon: '🕐' },
      { label: '4 a 6 horas', value: 'high', icon: '🕓' },
      { label: 'Más de 6 horas', value: 'very_high', icon: '🕗' },
    ],
  },
  {
    id: 2,
    question: '¿Qué nivel de estrés académico manejas?',
    options: [
      { label: 'Muy bajo — todo fluye', value: 'very_low', icon: '😌' },
      { label: 'Moderado — manejable', value: 'low', icon: '😊' },
      { label: 'Alto — muchas entregas', value: 'high', icon: '😤' },
      { label: 'Extremo — modo survivo', value: 'very_high', icon: '🤯' },
    ],
  },
  {
    id: 3,
    question: '¿Tu espacio tiene luz natural?',
    options: [
      { label: 'Mucha luz directa', value: 'full_sun', icon: '☀️' },
      { label: 'Luz indirecta suave', value: 'indirect', icon: '🌤' },
      { label: 'Muy poca luz', value: 'low_light', icon: '🌥' },
      { label: 'Sin ventanas, luz artificial', value: 'artificial', icon: '💡' },
    ],
  },
  {
    id: 4,
    question: '¿Qué tan seguido puedes cuidar una planta?',
    options: [
      { label: 'Diariamente con gusto', value: 'daily', icon: '🌱' },
      { label: 'Cada semana aprox.', value: 'weekly', icon: '📅' },
      { label: 'Cada 2 semanas', value: 'biweekly', icon: '🗓' },
      { label: 'Lo menos posible', value: 'minimal', icon: '✌️' },
    ],
  },
  
  {
    id: 5,
    question: '¿Qué tipo de planta buscas?',
    options: [
      { label: 'Relajante, que me calme', value: 'calming', icon: '🧘' },
      { label: 'Energizante, que me active', value: 'energizing', icon: '🔥' },
      { label: 'Que me ayude a concentrarme', value: 'focus', icon: '🎯' },
      { label: 'Solo quiero algo bonito', value: 'aesthetic', icon: '✨' },
    ],
  },
  {
    id: 6,
    question: '¿Qué estilo visual va contigo?',
    options: [
      { label: 'Minimalista y moderno', value: 'modern', icon: '◻️' },
      { label: 'Natural y orgánico', value: 'natural', icon: '🍃' },
      { label: 'Exuberante y llamativo', value: 'bold', icon: '🌿' },
      { label: 'Elegante y sofisticado', value: 'elegant', icon: '🖤' },
    ],
  },
  {
    id: 7,
    question: '¿Tienes experiencia cuidando plantas?',
    options: [
      { label: 'Soy experto/a, tengo muchas', value: 'expert', icon: '🌳' },
      { label: 'Algunas, pero sobreviven', value: 'some', icon: '🌱' },
      { label: 'Muy poca, se me olvida regarlas', value: 'little', icon: '😅' },
      { label: 'Primera vez, guíame', value: 'none', icon: '🆕' },
    ],
  },
];
