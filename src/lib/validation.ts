export const validateTokenInfo = (name: string, symbol: string): boolean => {
  return name.trim() !== '' && symbol.trim() !== '';
};

export const validateSocials = (twitter: string, telegram: string, website: string): boolean => {
  return twitter.trim() !== '' && telegram.trim() !== '' && website.trim() !== '';
};