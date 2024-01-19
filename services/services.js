import { API_KEY, endpoint, country, category } from '../config/config';

export async function services(customCategory = category) {
  try {
    const response = await fetch(`${endpoint}?country=${country}&category=${customCategory}`, {
      headers: {
        'X-API-KEY': API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch news. Status: ${response.status}`);
    }

    const result = await response.json();
    return result.articles;
  } catch (error) {
    console.error('Error fetching news:', error.message);
    return [];
  }
}
