import { axiosInstance } from ".";

// get all movies

export const GetAllMovies = async () => {
  try {
    const response = await axiosInstance.get("/api/movies/get-all-movies");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const GetMovieById = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/api/movies/get-movie-by-id/${id}`
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const AddMovie = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/movies/add-movie", payload);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const UpdateMovie = async (payload) => {
  try {
    const response = await axiosInstance.put(
      "/api/movies/update-movie",
      payload
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const DeleteMovie = async (payload) => {
  try {
    const response = await axiosInstance.put(
      "/api/movies/delete-movie",
      payload
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
