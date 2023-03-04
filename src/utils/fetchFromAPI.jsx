
export const fetchFromAPI = async (item) => {
    const BASE_URL=`https://newsapi.org/v2/everything?${item}&apiKey=7b1f6aad61564cabb5b6e0dfc3e08724`
    const res = await fetch(`${BASE_URL}`);
    const data= await res.json();
    return data;
  };