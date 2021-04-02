export const getStatus = url => async () => {
  const response = await fetch(url);
  const data = await response.json()
  return data
};