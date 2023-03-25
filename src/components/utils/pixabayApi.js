const API_KEY = '33445005-670ff6718a077cc10d3f17f6a';
const BASE_URL = 'https://pixabay.com/api/';

async function fetchImages(searchQuery, page = 1, perPage = 12) {
  try {
    const response = await fetch(
      `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=${perPage}`
    );

    if (!response.ok) {
      throw new Error('Error fetching images');
    }

    const data = await response.json();
    return data.hits;
  } catch (error) {
    throw error;
  }
}

export { fetchImages };
