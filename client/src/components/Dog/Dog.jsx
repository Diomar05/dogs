import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dog.module.css";

const Dog = ({ id, name, height_min, height_max, weight_min, weight_max, imagen, temperament }) => {
  
  // const { id, name, height_min, height_max, weight_min, weight_max, imagen, temperament } = props;
  return (

    <div className={styles.bloque}>
      <NavLink to={`/detail/${id}`}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.imgBx}>
              <img src={imagen} alt={imagen}/>
              <div className={styles.contentBx}>
                <h2>{name}</h2>
                
                <div className={styles.size}>
                  <h3>Peso: {weight_min} - {weight_max}</h3>
                </div>
                <div className={styles.color}>
                  <h3>Temperamentos: <br /> {temperament}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Dog;
