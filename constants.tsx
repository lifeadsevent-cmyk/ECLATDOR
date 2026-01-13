
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // ENTRÉES
  {
    id: 'e1',
    category: 'Entrées',
    name: 'Harira Marrakchia',
    description: 'Soupe traditionnelle veloutée aux pois chiches, lentilles, céleri et herbes fraîches, servie avec dattes et chebakia.',
    price: '85 DH',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Pois chiches', 'Lentilles', 'Coriandre', 'Tomate', 'Épices']
  },
  {
    id: 'e2',
    category: 'Entrées',
    name: 'Zaalouk d\'Aubergines',
    description: 'Caviar d\'aubergines fumées au feu de bois, tomates concassées, ail et huile d\'olive extra vierge.',
    price: '95 DH',
    image: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Aubergine', 'Tomate', 'Ail', 'Paprika', 'Cumin']
  },
  // VIANDES
  {
    id: 'v1',
    category: 'Viandes',
    name: 'Tajine de Bœuf aux Pruneaux',
    description: 'Jarret de bœuf fondant, pruneaux caramélisés à la cannelle, amandes grillées et graines de sésame.',
    price: '240 DH',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Bœuf', 'Pruneaux', 'Amandes', 'Cannelle', 'Safran']
  },
  {
    id: 'v2',
    category: 'Viandes',
    name: 'Couscous Royal "Éclat d\'Or"',
    description: 'Semoule fine roulée à la main, sept légumes de saison, viande d\'agneau et oignons confits à la cannelle (Tfaya).',
    price: '280 DH',
    image: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Agneau', 'Semoule', 'Courgettes', 'Carottes', 'Pois chiches']
  },
  // POISSONS
  {
    id: 'p1',
    category: 'Poissons',
    name: 'Tajine de Loup à la Charmoula',
    description: 'Filet de loup de mer mariné à la charmoula traditionnelle, citron confit et olives violettes de l\'Atlas.',
    price: '310 DH',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Loup de mer', 'Coriandre', 'Persil', 'Citron confit', 'Olives']
  },
  {
    id: 'p2',
    category: 'Poissons',
    name: 'Pastilla aux Fruits de Mer',
    description: 'Feuilleté croustillant aux amandes effilées, garni de crevettes royales, calamar et cabillaud parfumé au gingembre.',
    price: '290 DH',
    image: 'https://images.unsplash.com/photo-1534604973900-c41ab4c5e638?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Crevettes', 'Calamar', 'Poisson blanc', 'Vermicelle', 'Épices']
  },
  // PIZZAS
  {
    id: 'pi1',
    category: 'Pizzas',
    name: 'Madfouna Berbère',
    description: 'La "pizza du désert" : pâte artisanale farcie à la viande hachée épicée, œufs, oignons et graisse noble.',
    price: '180 DH',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Bœuf', 'Oignons', 'Épices berbères', 'Pâte maison']
  },
  {
    id: 'pi2',
    category: 'Pizzas',
    name: 'Pizza à la Kefta',
    description: 'Base tomate San Marzano, mozzarella fior di latte, viande de kefta marinée, olives noires et coriandre.',
    price: '160 DH',
    image: 'https://images.unsplash.com/photo-1574129624551-06c049f6b5f3?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Kefta', 'Mozzarella', 'Tomate', 'Olives', 'Coriandre']
  },
  // DESSERTS
  {
    id: 'd1',
    category: 'Desserts',
    name: 'Pastilla au Lait (Jawhara)',
    description: 'Superposition de feuilles de pastilla croustillantes, crème légère à la fleur d\'oranger et éclats d\'amandes.',
    price: '120 DH',
    image: 'https://images.unsplash.com/photo-1579372781878-670586bd75e3?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Lait', 'Fleur d\'oranger', 'Amandes', 'Feuilles de brik']
  },
  {
    id: 'd2',
    category: 'Desserts',
    name: 'Plateau des Délices de Fès',
    description: 'Assortiment de pâtisseries fines : Cornes de gazelle, Briouates au miel et Ghriba aux noix.',
    price: '140 DH',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Amandes', 'Miel', 'Noix', 'Sésame']
  },
  // BOISSONS
  {
    id: 'b1',
    category: 'Boissons',
    name: 'Thé à la Menthe Impérial',
    description: 'Thé vert Gunpowder de haute qualité, menthe fraîche et rituel de service traditionnel en hauteur.',
    price: '45 DH',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Thé vert', 'Menthe fraîche', 'Sucre']
  },
  {
    id: 'b2',
    category: 'Boissons',
    name: 'Nectar d\'Avocat à l\'Amande',
    description: 'Onctueux mélange d\'avocat frais, lait d\'amande et une touche délicate de fleur d\'oranger.',
    price: '65 DH',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Avocat', 'Lait d\'amande', 'Fleur d\'oranger']
  }
];
