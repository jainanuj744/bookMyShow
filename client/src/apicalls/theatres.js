const { axiosInstance } = require(".");

// add theatre

export const AddTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theatres/add-theatre",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// get all theatres by specific owner

export const GetAllTheatresByOwner = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theatres/get-all-theatre-by-owner",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// update theatre

export const UpdateTheatre = async (payload) => {
  try {
    const response = await axiosInstance.put(
      "/api/theatres/update-theatre",
      payload
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

// delete theatre

export const DeleteTheatre = async (payload) => {
  try {
    const response = await axiosInstance.put(
      "/api/theatres/delete-theatre",
      payload
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

// get all theatres

export const GetAllTheatres = async () => {
  try {
    const response = await axiosInstance.get("/api/theatres/get-all-theatres");
    return response.data;
  } catch (err) {
    return err.message;
  }
};

// add a show

export const AddShow = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theatres/add-show",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// get all shows by theatre

export const GetAllShowsByTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theatres/get-all-shows-by-theatre",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// delete a show

export const DeleteShow = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theatres/delete-show",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// get theatres by movie

export const GetTheatresByMovie = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theatres/get-all-theatres-by-movie",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// get show by ID

export const GetShowsById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theatres/get-show-by-id",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
