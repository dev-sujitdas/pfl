import React, { useEffect, useState } from "react";
import { getFinancialNews } from "../api/news";

const News = () => {
  const [showArticles, setShowArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getFinancialNews();
      if (data) {
        setShowArticles(data.sort(() => 0.5 - Math.random()).slice(0, 3));
      }
    };
    fetchNews();
  }, []);

  return (
    <section id="news" className="w-full  bg-[#EEF4EA]">
      <div className="w-full max-w-[150rem] mx-auto p-[7rem] bg-[#2D2D2C] rounded-t-[5rem]">
        <div className="news-top flex justify-between items-center">
          <div className="h-[3.75rem] overflow-hidden">
            <h2 className="text-6xl poppins-semibold text-[#fdfdfd]">
              News Updates
            </h2>
          </div>
          <div className="flex w-[20rem] gap-6 items-center justify-between">
            <div className="w-28">
              <div className="line w-28 h-1 bg-[#d4d4d8]"></div>
            </div>
            <div className="h-[5.3rem] w-[10rem] overflow-hidden">
              <h3 className="text-xl poppins-medium w-[10rem] text-zinc-300">
                Reliable Services for a Secure Tomorrow
              </h3>
            </div>
          </div>
        </div>
        <div className="news-subtitle">
        <h3 className="subtitle mt-6 text-2xl poppins-regular-italic w-[30%] text-zinc-400">
         Stay informed with the latest in finance and market trends.
        </h3>
        </div>
        <div className="w-[80%] mx-auto flex justify-center items-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showArticles.map((article, index) => (
              <div
                key={index}
                className="w-96 bg-[#FDFDFD] shadow-lg p-4 rounded-lg hover:shadow-xl transition flex flex-col justify-between"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h2 className="text-lg font-semibold">{article.title}</h2>
                <p className="text-sm text-gray-600">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 mt-2 inline-block"
                >
                  Read more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

