export const getGifs = async (category) => {
  const url =
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=y0rLWfZDCF9Un9HIAir0Za0anBgxD34k`;
  const resp = await fetch(url);
  const json = await resp.json();
  const gifs = json.data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  console.log(`gifs`, gifs);
  return gifs;
};
