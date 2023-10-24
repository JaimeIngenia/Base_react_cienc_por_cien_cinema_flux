import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypesMovies";


const CHANGE_EVENT = "change";


let movies = [];

class movieStore extends EventEmitter {
    addChangeListener(callback) {
      this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
    emitChange() {
      this.emit(CHANGE_EVENT);
    }
    getMovies() {
      return movies;
    }
  

  }


  const store = new movieStore();


  
Dispatcher.register((action) => {
    switch (action.actionType) {



  
      case actionTypes.LOAD_MOVIE:
        movies = action.movies;
        store.emitChange();
        break;
        
      default:
        break;
    }
  });
  
  export default store;