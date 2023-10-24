import React from 'react';
import { useState } from 'react';
import storeMovie from "../../store/movieStore"
import { useEffect } from 'react';
import * as actionMovies from '../../actions/moviesAction'
import styles from './HomePage.module.css'
import objetoFondoImage from '../../assets/fonde.svg'
import Card from '../cards/Card';

const HomePage = () => {

    const [ movies, setMovies ] = useState( storeMovie.getMovies() )  

    useEffect(() => {
        storeMovie.addChangeListener(onChange);
        if (movies.length === 0) {
            
            actionMovies.loadMovies();
            
        }
      }, [movies.length]);

         function onChange() {
        setMovies(storeMovie.getMovies());
      }
      console.log("mira la data:"+ movies.genero);
      


    return (
       
                <div className={styles.container__home__page} >

                    <img src={objetoFondoImage} alt="" />

                    <Card 
                        movies={movies}
                    />
                         
                </div>

    );
}

export default HomePage;
