import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dog.module.css";

const Dog = ({ id, name, weight, imagen, temperament }) => {
  return (
    // <div className={styles.container}>
    //   <NavLink to={"/dogs/" + id}>
    //     <div className={styles.containerDog}>
    //       <div className={styles.containerImagen}>
    //         <img className={styles.imagen} src={imagen} alt="Un Perro" />
    //       </div>
    //       <div className={styles.containerDatos}>
    //         <h4>{name}</h4>
    //         <h5>{weight}</h5>
    //         <div>
    //           <h5> {temperament} </h5>
    //         </div>
    //       </div>
    //     </div>
    //   </NavLink>
    // </div>

    <div className={styles.bloque}>
      <NavLink to={"/dogs/" + id}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.imgBx}>
              <img src={imagen} />
              <div className={styles.contentBx}>
                <h2>{name}</h2>
                <div className={styles.size}>
                  <h3>Peso: {weight}</h3>
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
