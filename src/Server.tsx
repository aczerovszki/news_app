const Server = () => {
  const BASE_URL = "https://newsapi.org/v2/everything?";
  const url =
    BASE_URL +
    "q=Apple&" +
    "from=2021-05-05&" +
    "sortBy=popularity&" +
    "apiKey=8f916adb954c4f1194294d4b552bf852";

  const getArticles = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    const articles = data.articles;
    console.log(articles);
    return articles;
  };
  return getArticles(url);
};

export default Server;
