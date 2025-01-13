export const validateTokenInfo = (name: string, ticker: string): boolean => {
  return name.trim() !== '' && ticker.trim() !== '';
};

export const validateSocials = (twitter: string, telegram: string, website: string): boolean => {
  return twitter.trim() !== '' && telegram.trim() !== '' && website.trim() !== '';
};