import React from 'react';
import styles from './Card.module.css'

const Card = ( {movies} ) => {
    return (
        <>
            { movies.map( ( x ) =>{
                return (
                    <>

                    <div className={styles.container__card}>
                
                        <img src={x.imagenURL} alt="" />
                        <h3>{x.titulo}</h3>
                        <p>{x.descripcion}</p>

                    </div>

                    </>
                )
                }
            )
            }

        </>
    );
}

export default Card;
