export const getFinancialNews = async () => {
  try {
    const response = await fetch("https://gnews-api-k6.vercel.app/api/news");
    const result = await response.json();
    return result.data.articles || [];
  } catch (error) {
    console.log("Failed to fetch data", error);
    return [];
  }
};
