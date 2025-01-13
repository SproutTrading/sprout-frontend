export async function getSprout() {
  return {
    id: '1',
    level: 1,
    total_water: 0,
    total_fertilizer: 0,
    total_sunshine: 0,
    updated_at: new Date().toISOString()
  };
}

export async function isAdmin() {
  return false;
}