
export const getFinancialNews = async () => {
  const api = "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=ebf62c14cfa91561d3ab1314afefc8a2";

  try {
    const response = await fetch(api);
    const result = await response.json();    
    return result.articles || [];
    
  } catch (error) {
    console.log("Failed to fetch data", error);
    return [];
  }
};
