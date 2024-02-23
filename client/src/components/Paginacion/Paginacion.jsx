import React from 'react'
import styles from './Paginacion.module.css'

const Paginacion = ({allDogs, dogsPage, paginacion, currentPage}) => {

    const pages = []

    for (let d = 1; d <= Math.ceil(allDogs/dogsPage); d++) {
        pages.push(d);
        
    }

    return ( 
        <nav>
            <ul className={styles.list}>
                {pages && pages.map(number=> (
                    <li>
                        <div
                        className={
                            currentPage === number ? styles.crumb__active : styles.crumb }
                            onClick={()=> paginacion(number)}
                        >
                        {number}
                        </div>
                    </li>
                ))}
                
            </ul>
        </nav>
     );
}
 
export default Paginacion;