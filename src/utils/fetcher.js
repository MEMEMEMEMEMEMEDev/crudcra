async function fetcher(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } 
  
  catch (error) {
    const err = new Error("Error fetching data");
    throw err;
  }
}

export { fetcher };
