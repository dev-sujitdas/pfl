import React, { useEffect, useState } from "react";
// import { getFinancialNews } from "../api/news";
// import useScrollAnimation from '../hooks/useScrollAnimation'

const News = () => {
  // useScrollAnimation();
  const [showArticles, setShowArticles] = useState([]);
  const [emailData, setEmailData] = useState({ email: "" });

  useEffect(() => {
    try {
      const fetchNews = async () => {
        const data = await getFinancialNews();
        if (data) {
          setShowArticles(data.sort(() => 0.5 - Math.random()).slice(0, 3));
        } else {
          throw Error(err);
        }
      };
      fetchNews();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="news" className="w-full  bg-[#EEF4EA]">
      <div className="w-full max-w-[150rem] mx-auto xl:p-[7rem] md:p-[3rem] p-[2rem] rounded-t-[2rem] xl:rounded-t-[5rem] bg-[#2D2D2C]">
        <div className="news-top flex justify-between items-center">
          <div className="h-[3.75rem] overflow-hidden flex items-center">
            <h2 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl poppins-semibold text-[#fdfdfd]">
              News Updates
            </h2>
          </div>
          <div className="flex w-[10rem] md:w-[20rem] md:gap-6 items-center justify-end md:justify-between">
            <div className="hidden lg:w-28 md:block">
              <div className="line w-5 lg:w-28 h-1 bg-[#d4d4d8]"></div>
            </div>
            <div className="h-[4rem] md:h-[5.3rem] w-[7rem] md:w-[10rem] overflow-hidden">
              <h3 className="text-sm md:text-lg 2xl:text-xl poppins-medium w-[7rem] md:w-[10rem] text-zinc-300">
                Reliable Services for a Secure Tomorrow
              </h3>
            </div>
          </div>
        </div>

        <div className="news-subtitle">
          <h3 className="subtitle mt-6 text-lg lg:text-2xl poppins-regular-italic w-full xl:w-[30%] text-zinc-400">
            Stay informed with the latest in finance and market trends.
          </h3>
        </div>
        <div className="lg:w-[80%] w-full mx-auto flex flex-col justify-center items-center mt-10">
          <div className="news-card-wrapper flex flex-wrap justify-center items-center gap-6">
            {showArticles.map((article, index) => (
              <div
                key={index}
                className="news-card lg:w-96  w-80 bg-[#FDFDFD] shadow-lg p-4 rounded-2xl hover:scale-105 transition flex flex-col justify-between"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h2 className="text-lg font-semibold">
                  {article.title.length > 40
                    ? article.title.slice(0, 30) + "..."
                    : article.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {article.description.length > 21
                    ? article.description.slice(0, 90) + "..."
                    : article.description}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-800 mt-2 inline-block"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="newsletter mt-10 flex md:w-fit w-full lg:justify-items-start justify-center items-center">
          <input
            type="email"
            name="email"
            placeholder="Subscribe to our newsletter"
            value={emailData.email}
            onChange={handleChange}
            className="flex-1 w-64 px-4 py-2 border bg-[#e9e9e9] border-none rounded-l-2xl "
          />
          <button
            onClick={() => handleSubmit}
            className="px-5 py-2 rounded-r-2xl poppins-regular bg-[#2c2b2b] border-1 border-amber-50 hover:bg-[#BA8748] text-amber-50 font-medium text-[0.8rem] xl:text-[1rem] cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
