import {Client, Databases, Query, ID} from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;
const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client()
.setEndpoint(endpoint)
.setProject(PROJECT_ID);

const databases = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
  try {
    // 1. Check if the search term exists
    const result = await databases.listDocuments(DATABASE_ID, TABLE_ID, [
      Query.equal("searchTerm", searchTerm)
    ]);

    if (result.documents.length > 0) {
      const doc = result.documents[0];
      await databases.updateDocument(DATABASE_ID, TABLE_ID, doc.$id, {
        count: doc.count + 1
      });
    } else {
      await databases.createDocument(DATABASE_ID, TABLE_ID, ID.unique(), {
        searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      });
    }
  } catch (err) {
    console.error("Error updating search count:", err);
  }
};

export const getTrendingMovies = async () => {
  try {
    const result = await databases.listDocuments(DATABASE_ID, TABLE_ID, [
      Query.limit(5),
      Query.orderDesc("count")
    ]);
    return result.documents;
  } catch (err) {
    console.error("Error fetching trending movies:", err);
    return [];
  }
};