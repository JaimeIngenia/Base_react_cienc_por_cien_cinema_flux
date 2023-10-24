import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypesMovies";
import * as movieApi from "../api/MovieApi";

export function loadMovies() {
  return movieApi.getMovies().then((products) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_MOVIE,
      movies: products,
    });
  });
}
