export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function getMarketCapStyles(marketCap: string): {
  bg: string;
  border: string;
  text: string;
  pulse?: boolean;
} {
  // Convert marketCap string (e.g., "100K" or "1.5M") to number in thousands
  const value = marketCap.endsWith('M') 
    ? parseFloat(marketCap.slice(0, -1)) * 1000 
    : parseFloat(marketCap.slice(0, -1));

  if (value <= 50) {
    return {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-600'
    };
  }
  
  if (value <= 100) {
    return {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      text: 'text-orange-600'
    };
  }

  // For values over 1M (1000K), use blue with pulse effect
  if (value >= 1000) {
    return {
      bg: 'bg-blue-50',
      border: 'border-blue-300',
      text: 'text-blue-600',
      pulse: true
    };
  }

  // For values between 100K and 999K
  return {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-600'
  };
}