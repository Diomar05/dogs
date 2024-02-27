import React from "react";
import Dog from "../Dog/Dog";
import { useEffect, useState } from "react";
import { getDogs } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Paginacion from '../Paginacion/Paginacion'
import styles from './Dogs.module.css'

const Dogs = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.allDogs);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPage] = useState(8);
    const lastDog = currentPage * dogsPage;
    const firstDog = lastDog - dogsPage;
    const dogs = allDogs.slice(firstDog, lastDog)
  

  const paginacion = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {dispatch(getDogs());}, [dispatch]);

  return (
    <div>
      <div className={styles.containerDogs}>
        {dogs.map((dog) => {
          return (
              <Dog
              key={dog.id}
              id={dog.id}
              imagen={dog.imagen}
              name={dog.name}
              weight_min={dog.weight_min} weight_max={dog.weight_max}
              temperament={dog.temperament}
            />
          );
        })}
  
  
      </div>
      <div>
      <Paginacion
              dogsPage={dogsPage}
              allDogs={allDogs.length}
              paginacion={paginacion}
              currentPage={currentPage}
          />
      </div>
    </div>
  );
};

export default Dogs;
