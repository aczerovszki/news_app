const Server = () => {
  const BASE_URL = "https://newsapi.org/v2/";
  

  const getArticles = async (source:any) => {
        const url = BASE_URL + 
                "everything?"+
                "sources="+source+
                "&apiKey=8f916adb954c4f1194294d4b552bf852"
                const res = await fetch(url);
                const data = await res.json();
                const articles = data.articles;
                console.log(articles);
                return articles;
  };

  const getSources = async () =>{
        const url = BASE_URL +
                "sources?"+
                "apiKey=8f916adb954c4f1194294d4b552bf852";
                const res = await fetch(url);
                const data = await res.json();
                const sources = data.sources;
                console.log(sources);
                return sources;
  }
  
  const API_CALLS = {
        getArticles,
        getSources
  }
  return API_CALLS
};

export default Server;
