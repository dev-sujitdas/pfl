export const getFinancialNews = async () => {
  try {
    const response = await fetch("https://mediastack-api-gamma.vercel.app/api/news");
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.log("Failed to fetch data", error);
    return [];
  }
};
