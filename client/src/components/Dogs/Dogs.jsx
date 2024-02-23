import React from "react";
//import styles from './Dogs.module.css'
import Dog from "../Dog/Dog";
import { useEffect, useState } from "react";
import { getDogs } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Paginacion from '../Paginacion/Paginacion'

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
        

      {dogs.map((d) => {
        return (
          <Dog
            key={d.id}
            id={d.id}
            imagen={d.imagen}
            name={d.name}
            weight={d.weight}
            temperament={d.temperament}
          />
        );
      })}

<Paginacion 
            dogsPage={dogsPage}
            allDogs={allDogs.length}
            paginacion={paginacion}
            currentPage={currentPage}
        />
    </div>
  );
};

export default Dogs;
