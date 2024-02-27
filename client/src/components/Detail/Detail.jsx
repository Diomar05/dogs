import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDetails, getDetails } from "../../redux/actions";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = (props) => {
  const dispatch = useDispatch();
  let { id } = useParams(); // Get the id from the route params

  useEffect(() => {
    if (id) {
      // Ensure id exists before dispatching action
      dispatch(getDetails(id));
    }
    return () => dispatch(deleteDetails());
  }, [dispatch, id]);

  const detailDog = useSelector((state) => state.dogs);

  return (
    <div className={styles.bloque}>
      <div className={styles.container}>
      <div className={styles.img} ><img src={detailDog.imagen} alt="" /></div>
      <div><h3>{detailDog.name}</h3></div>
      
      <div>
      <h5>Altura</h5>
      <h5>{detailDog.height_min}</h5>
      <h5>{detailDog.height_max}</h5>
      </div>
      <div>
      <h5>Peso</h5>
      <h5>{detailDog.weight_min}</h5>
      <h5>{detailDog.weight_max}</h5>
      </div>
      <div>
      <p>Temperamento: {detailDog.temperament}</p>
      </div>
      <div>
      <NavLink to="/home">
        <button className="btn">Volver</button>
      </NavLink>
      </div>
    </div>
    </div>
  );
};

export default Detail;
