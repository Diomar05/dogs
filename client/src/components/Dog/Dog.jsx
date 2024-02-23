import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Dog.module.css'

const Dog = ({ id, name, weight, imagen, temperament }) => {
  
  return (
    <div>
      <div>
      <NavLink to={"/dogs/" + id}>
        <div className={styles.container}>
         
            
            <div >
              <img src={imagen} alt="Un Perro" width="250px" />
            </div>
            <div>
            <h4>{name}</h4>
            <h5>{weight}</h5>
            <div >
              <h5 >
         
                <div > <h5> {temperament} </h5> </div>
              </h5>
            </div>
            </div>
    
        </div>
      </NavLink>
      </div>
    </div>
  );
};

export default Dog;
