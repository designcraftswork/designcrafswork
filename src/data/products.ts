export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
}

export const CATEGORIES = [
  { id: 'spiritual', name: 'Spiritual Stickers', image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=800&auto=format&fit=crop' },
  { id: 'kids', name: 'Kids Room', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=800&auto=format&fit=crop' },
  { id: '3d-illusion', name: '3D Illusion', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop' },
  { id: 'family-name', name: 'Family Name', image: 'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=800&auto=format&fit=crop' },
  { id: 'motivational', name: 'Motivational Quotes', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop' },
  { id: 'premium', name: 'Premium Collection', image: 'https://images.unsplash.com/photo-1616486341351-792a44a66a01?q=80&w=800&auto=format&fit=crop' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Divine Ganesha Spiritual Wall Sticker',
    category: 'spiritual',
    price: 499,
    mrp: 999,
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1567591974574-e85263d44271?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Beautifully crafted Ganesha wall sticker for your home temple or living room. Made with premium waterproof vinyl.',
    sizes: ['Small', 'Medium', 'Large'],
    colors: ['Gold', 'Black', 'White'],
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Space Explorer Kids Room Decal',
    category: 'kids',
    price: 799,
    mrp: 1499,
    rating: 4.9,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Inspire your little astronaut with this vibrant space-themed wall decal set.',
    sizes: ['Medium', 'Large'],
    colors: ['Multi'],
    isNew: true
  },
  {
    id: '3',
    name: '3D Window View Mountain Landscape',
    category: '3d-illusion',
    price: 1299,
    mrp: 2499,
    rating: 4.7,
    reviews: 56,
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Create an illusion of a window with a breathtaking mountain view. Perfect for small rooms.',
    sizes: ['Large', 'Extra Large'],
    colors: ['Natural'],
    isBestSeller: true
  },
  {
    id: '4',
    name: 'Custom Family Name Monogram',
    category: 'family-name',
    price: 899,
    mrp: 1799,
    rating: 5.0,
    reviews: 210,
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Personalize your home with your family name in elegant calligraphy.',
    sizes: ['Medium', 'Large'],
    colors: ['Gold', 'Black', 'Rose Gold'],
    isBestSeller: true
  },
  {
    id: '5',
    name: 'Dream Big Motivational Quote',
    category: 'motivational',
    price: 399,
    mrp: 799,
    rating: 4.6,
    reviews: 45,
    images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Start your day with positivity. High-quality matte finish vinyl sticker.',
    sizes: ['Small', 'Medium'],
    colors: ['Black', 'White'],
    isNew: true
  },
  {
    id: '6',
    name: 'Royal Mandala Premium Art',
    category: 'premium',
    price: 1599,
    mrp: 2999,
    rating: 4.9,
    reviews: 78,
    images: [
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Intricate mandala design for a luxurious touch to your bedroom or office.',
    sizes: ['Large', 'XL'],
    colors: ['Gold', 'Copper'],
    isBestSeller: true
  },
  {
    id: '7',
    name: 'Om Namah Shivaya Calligraphy',
    category: 'spiritual',
    price: 549,
    mrp: 1099,
    rating: 4.8,
    reviews: 132,
    images: [
      'https://images.unsplash.com/photo-1567591974574-e85263d44271?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Sacred chant in beautiful Sanskrit calligraphy.',
    sizes: ['Medium', 'Large'],
    colors: ['Gold', 'Black'],
    isBestSeller: true
  },
  {
    id: '8',
    name: 'Cute Animals Jungle Theme',
    category: 'kids',
    price: 899,
    mrp: 1599,
    rating: 4.7,
    reviews: 64,
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Friendly jungle animals to brighten up your child\'s nursery.',
    sizes: ['Large'],
    colors: ['Multi'],
    isNew: true
  },
  {
    id: '9',
    name: 'Abstract Geometric Wall Art',
    category: 'premium',
    price: 1199,
    mrp: 2199,
    rating: 4.5,
    reviews: 38,
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Modern geometric shapes for a contemporary home decor style.',
    sizes: ['Medium', 'Large'],
    colors: ['Black & Gold', 'Blue & Silver'],
    isNew: true
  },
  {
    id: '10',
    name: 'Radha Krishna Love Sticker',
    category: 'spiritual',
    price: 699,
    mrp: 1299,
    rating: 4.9,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1567591974574-e85263d44271?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Symbol of eternal love for your bedroom or living area.',
    sizes: ['Medium', 'Large'],
    colors: ['Gold', 'Black'],
    isBestSeller: true
  },
  {
    id: '11',
    name: '3D Brick Wall Illusion',
    category: '3d-illusion',
    price: 999,
    mrp: 1899,
    rating: 4.4,
    reviews: 42,
    images: [
      'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Realistic white brick wall texture sticker for an industrial look.',
    sizes: ['Large'],
    colors: ['White', 'Grey'],
    isNew: true
  },
  {
    id: '12',
    name: 'Believe in Yourself Quote',
    category: 'motivational',
    price: 349,
    mrp: 699,
    rating: 4.7,
    reviews: 51,
    images: [
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Daily reminder to stay confident and focused.',
    sizes: ['Small', 'Medium'],
    colors: ['Black', 'White'],
    isBestSeller: false
  }
];
