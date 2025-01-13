export interface Token {
  id: string;
  name: string;
  ticker: string;
  image: string;
  holders: number;
  marketCap: string;
  price: string;
  twitter?: string;
  website?: string;
  telegram?: string;
  discord?: string;
  resources: {
    water: number;
    fertilizer: number;
    sunshine: number;
  };
}

// Helper to generate market caps across all ranges for testing
const generateMarketCap = (index: number) => {
  // First 10 tokens: 10K-45K (red)
  if (index < 10) {
    const value = 10 + Math.random() * 35;
    return `${value.toFixed(1)}K`;
  }
  
  // Next 10 tokens: 51K-95K (orange)
  if (index < 20) {
    const value = 51 + Math.random() * 44;
    return `${value.toFixed(1)}K`;
  }
  
  // Last 10 tokens: Mix of 101K-900K (green) and 1.1M-2M (green with pulse)
  const isMillionaire = Math.random() > 0.5;
  if (isMillionaire) {
    const value = 1.1 + Math.random() * 0.9;
    return `${value.toFixed(1)}M`;
  } else {
    const value = 101 + Math.random() * 799;
    return `${value.toFixed(1)}K`;
  }
};

// Helper to generate random price between $0.001 and $10
const generatePrice = () => {
  const value = 0.001 + Math.random() * 9.999;
  return value.toFixed(value < 0.01 ? 4 : value < 0.1 ? 3 : 2);
};

export function useMockTokens() {
  const tokens: Token[] = Array.from({ length: 30 }, (_, i) => {
    const marketCap = generateMarketCap(i);
    const price = generatePrice();
    const holders = Math.floor(500 + Math.random() * 9500);
    
    const images = [
      'https://i.imgur.com/WJxBtdL.png',
      'https://i.imgur.com/AtCOTrU.png',
      'https://i.imgur.com/dVJ2OZf.png'
    ];
    const image = images[Math.floor(Math.random() * images.length)];

    // Generate random resource amounts
    const resources = {
      water: Math.floor(Math.random() * 1000),
      fertilizer: Math.floor(Math.random() * 1000),
      sunshine: Math.floor(Math.random() * 1000)
    };

    return {
      id: String(i + 1),
      name: `Sprout Token ${i + 1}`,
      ticker: `SPT${i + 1}`,
      image,
      holders,
      marketCap,
      price,
      twitter: 'To be assigned',
      website: 'To be assigned',
      telegram: 'To be assigned',
      discord: 'To be assigned',
      resources
    };
  });

  return { tokens };
}