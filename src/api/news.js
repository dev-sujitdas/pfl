export const getFinancialNews = async () => {
  try {
    const response = await fetch("https://gnews-api-k6.vercel.app/api/news");

    if (!response.ok) {
      const errText = await response.text();
      console.error("❌ Server returned non-200 status:", response.status, errText);
      return [];
    }

    const result = await response.json();
    return result.data.articles || [];

  } catch (error) {
    console.log("❌ Fetch failed:", error);
    return [];
  }
};
