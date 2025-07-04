import { Plant } from '../types/plants';

// Plant data with multilingual support and proper images
const plantsData: Record<string, Plant> = {
  'rose': {
    id: 'rose',
    name: 'Rose',
    scientificName: 'Rosa',
    image: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A classic flowering plant known for its beautiful blooms and pleasant fragrance.',
    wateringFrequency: 'medium',
    lightPreference: 'full sun',
    fertilizer: 'rose-specific balanced',
    heightRange: {
      min: 30,
      max: 150
    },
    idealTemperature: {
      min: 16,
      max: 28
    },
    careInstructions: 'Roses need well-draining soil and regular pruning to encourage blooming. Watch for pests like aphids and blackspot disease.'
  },
  'sunflower': {
    id: 'sunflower',
    name: 'Sunflower',
    scientificName: 'Helianthus annuus',
    image: 'https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Tall annual plants known for their large, bright yellow blooms that follow the sun.',
    wateringFrequency: 'medium',
    lightPreference: 'full sun',
    fertilizer: 'balanced, low-nitrogen',
    heightRange: {
      min: 50,
      max: 300
    },
    idealTemperature: {
      min: 20,
      max: 30
    },
    careInstructions: 'Sunflowers are relatively easy to grow. They need support as they grow taller and regular watering until established.'
  },
  'jasmine': {
    id: 'jasmine',
    name: 'Jasmine',
    scientificName: 'Jasminum',
    image: 'https://images.pexels.com/photos/8210498/pexels-photo-8210498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Climbing vines or shrubs with intensely fragrant white or yellow flowers.',
    wateringFrequency: 'medium',
    lightPreference: 'partial sun',
    fertilizer: 'balanced, high-phosphorus',
    heightRange: {
      min: 20,
      max: 150
    },
    idealTemperature: {
      min: 18,
      max: 26
    },
    careInstructions: 'Jasmine likes humid conditions and consistent moisture. Provide a trellis or support for climbing varieties.'
  },
  'peace-lily': {
    id: 'peace-lily',
    name: 'Peace Lily',
    scientificName: 'Spathiphyllum',
    image: 'https://images.pexels.com/photos/7663968/pexels-photo-7663968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Popular indoor plant with elegant white flowers and glossy leaves.',
    wateringFrequency: 'medium',
    lightPreference: 'shade',
    fertilizer: 'balanced houseplant',
    heightRange: {
      min: 30,
      max: 90
    },
    idealTemperature: {
      min: 18,
      max: 30
    },
    careInstructions: 'Peace lilies prefer humid environments and will droop when thirsty. Keep away from cold drafts and direct sunlight.'
  },
  'snake-plant': {
    id: 'snake-plant',
    name: 'Snake Plant',
    scientificName: 'Sansevieria trifasciata',
    image: 'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Nearly indestructible plant with tall, stiff leaves. Excellent air purifier.',
    wateringFrequency: 'low',
    lightPreference: 'partial sun',
    fertilizer: 'cactus or succulent',
    heightRange: {
      min: 20,
      max: 120
    },
    idealTemperature: {
      min: 15,
      max: 32
    },
    careInstructions: 'Allow soil to dry completely between waterings. Can tolerate low light but grows faster in brighter conditions.'
  },
  'aloe-vera': {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Succulent plant with medicinal properties. Gel from leaves soothes burns and skin irritations.',
    wateringFrequency: 'low',
    lightPreference: 'full sun',
    fertilizer: 'cactus or succulent',
    heightRange: {
      min: 15,
      max: 60
    },
    idealTemperature: {
      min: 13,
      max: 27
    },
    careInstructions: 'Plant in well-draining soil and water only when top inch of soil is dry. Watch for brown spots which may indicate too much sun.'
  },
  'basil': {
    id: 'basil',
    name: 'Basil',
    scientificName: 'Ocimum basilicum',
    image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Aromatic herb used in cooking, especially in Italian and Thai cuisines.',
    wateringFrequency: 'high',
    lightPreference: 'full sun',
    fertilizer: 'balanced, organic',
    heightRange: {
      min: 20,
      max: 60
    },
    idealTemperature: {
      min: 18,
      max: 30
    },
    careInstructions: 'Pinch off flower buds to encourage leaf growth. Harvest from the top to promote bushier growth.'
  },
  'lavender': {
    id: 'lavender',
    name: 'Lavender',
    scientificName: 'Lavandula',
    image: 'https://images.pexels.com/photos/4913766/pexels-photo-4913766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fragrant perennial herb with purple flowers, known for its calming scent.',
    wateringFrequency: 'low',
    lightPreference: 'full sun',
    fertilizer: 'low-nitrogen',
    heightRange: {
      min: 30,
      max: 90
    },
    idealTemperature: {
      min: 15,
      max: 30
    },
    careInstructions: 'Lavender needs excellent drainage. Prune after flowering to maintain shape and promote new growth.'
  },
  'orchid': {
    id: 'orchid',
    name: 'Orchid',
    scientificName: 'Orchidaceae',
    image: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Elegant flowering plants with exotic blooms, popular as houseplants.',
    wateringFrequency: 'low',
    lightPreference: 'partial sun',
    fertilizer: 'orchid-specific',
    heightRange: {
      min: 15,
      max: 60
    },
    idealTemperature: {
      min: 18,
      max: 26
    },
    careInstructions: 'Use orchid bark mix for potting. Water weekly by soaking roots, then drain completely. Provide humidity.'
  },
  'fern': {
    id: 'fern',
    name: 'Fern',
    scientificName: 'Polypodiopsida',
    image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lush green plants that thrive in humid, shaded environments.',
    wateringFrequency: 'high',
    lightPreference: 'shade',
    fertilizer: 'balanced, diluted',
    heightRange: {
      min: 10,
      max: 80
    },
    idealTemperature: {
      min: 16,
      max: 24
    },
    careInstructions: 'Keep soil consistently moist but not waterlogged. Mist regularly to maintain humidity. Avoid direct sunlight.'
  }
};

export default plantsData;