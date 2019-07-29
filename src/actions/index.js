import axios from "./../apis/jsonPlaceholderMovies";

export const fetchMovies = (len, page) => async dispatch => {
  console.log(len, page);
  const api_key = `?api_key=600a869b06e563229166741da96b4400&language=en-US&page=${page}`;
  //console.log("response");
  const response = await axios.get("/movie/popular" + api_key);
  console.log(response.data.results);
  dispatch({
    type: "FETCH_MOVIES",
    payload:
      len === 20
        ? response.data.results.slice(10, len)
        : response.data.results.slice(0, len)
  });
};
