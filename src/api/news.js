
export const getFinancialNews = async () => {
  try {
    const response = await fetch("https://gnews-api-nine.vercel.app/api/news");
    const result = await response.json();    
    return result.articles || [];
    
  } catch (error) {
    console.log("Failed to fetch data", error);
    return [];
  }
};


