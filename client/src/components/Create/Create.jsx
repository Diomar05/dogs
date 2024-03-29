import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { postDog, getTemperamentsList } from "../../redux/actions";
import styles from "./Create.module.css";

function validateForm(input) {
  let errors = {};

  //Nombre
  if (!input.name) {
    errors.name = "You must type a name";
  } else {
    errors.name = "";
  }

  // WEIGHTS
  if (!input.weight_min) {
    // weight min
    errors.weight_min = "Type a valid minimal weight number";
  } else if (!/\d{1,2}/gi.test(input.weight_min)) {
    errors.weight_min = "Weight must have min values. Example: '25'";
  } else {
    errors.weight_min = "";
  }
  if (!input.weight_max) {
    // weight max
    errors.weight_max = "Type a valid maxim weight number";
  } else if (!/\d{1,2}/gi.test(input.weight_max)) {
    errors.weight_max = "Weight must have max values. Example: '25'";
  } else {
    errors.weight_max = "";
  }

  // HEIGHTS
  if (!input.height_min) {
    // height min
    errors.height_min = "Type a valid minimal height number";
  } else if (!/\d{1,2}/gi.test(input.height_min)) {
    errors.height_min = "Height must have min values. Example: '25'";
  } else {
    errors.height_min = "";
  }
  if (!input.height_max) {
    // height max
    errors.height_max = "Type a valid maxim height number";
  } else if (!/\d{1,2}/gi.test(input.height_max)) {
    errors.height_max = "Height must have max values. Example: '25'";
  } else {
    errors.height_max = "";
  }
  return errors;
}

const Create = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const temperament = useSelector((state) => state.temperament).sort(function (
    a,
    b
  ) {
    if (a < b) return -1;
    else return 1;
  });
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    imagen: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    years: "",
    temperament: [],
  });

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(validateForm({ ...input, [e.target.name]: e.target.value }));
  }

  function handleSelect(e) {
    setInput({ ...input, temperament: [...input.temperament, e.target.value] });
  }

  function handleDelete(el) {
    setInput({
      ...input,
      temperament: input.temperament.filter((temp) => temp !== el),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !errors.name &&
      !errors.image &&
      !errors.weight_min &&
      !errors.height_min &&
      !errors.weight_max &&
      !errors.height_max
    ) {
      alert("Tu Perro Ha Sido Creado Satisfactoriamente");
      dispatch(postDog(input));
      setInput({
        name: "",
        imagen: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        years: "",
        temperament: [],
      });
    } else {
      return alert("Something went wrong. Please try again.");
    }
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getTemperamentsList());
  }, [dispatch]);

  return (
    // <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.containerTitle}>
          {""}<h1>Crea tu Perro</h1>{""}
        </div>
        <br />
        <div className={styles.formContainer}>
          <form onSubmit={(e) => handleSubmit(e)}>

            <div className={styles.containerName}>
              
              <label htmlFor="">Nombre:</label>
              
              <input
                type="text"
                value={input.name}
                name="name"
                placeholder="Nombre el Perro"
                onChange={(e) => handleChange(e)}
                required
              />
              <div>
                <p className={styles.error}>{errors.name}</p>
              </div>
            </div>


            <div className={styles.Section}>
              <label>Imagen</label>
              <input
                type="url"
                value={input.imagen}
                name="imagen"
                placeholder="http://myimageontheweb.com"
                onChange={(e) => handleChange(e)}
              />
              <div>
                <p className={styles.error}>{errors.imagen}</p>
              </div>
            </div>

            <div className={styles.Section}>
              <h4>Altura</h4>
              <label>Minima</label>
              <input
                type="number"
                value={input.height_min}
                name="height_min"
                placeholder="20"
                onChange={(e) => handleChange(e)}
                required
              />
              <div>
                <p className={styles.error}>{errors.height_min}</p>
              </div>
              <label>Maxima</label>
              <input
                type="number"
                value={input.height_max}
                name="height_max"
                placeholder="50"
                onChange={(e) => handleChange(e)}
                required
              />
              <div>
                <p className={styles.error}>{errors.height_max}</p>
              </div>
            </div>

            <div className={styles.Section}>
              <h4>Peso</h4>
              <label>Minimo</label>
              <input
                type="number"
                value={input.weight_min}
                name="weight_min"
                placeholder="15"
                onChange={(e) => handleChange(e)}
                required
              />
              <div>
                <p className={styles.error}>{errors.weight_min}</p>
              </div>
              <label>Maximo</label>
              <input
                type="number"
                value={input.weight_max}
                name="weight_max"
                placeholder="32"
                onChange={(e) => handleChange(e)}
                required
              />
              <div>
                <p className={styles.error}>{errors.weight_max}</p>
              </div>
            </div>

            <div className={styles.Section}>
              <label>Años de Vida</label>
              <input
                type="text"
                value={input.years}
                name="years"
                placeholder="12 - 15 years"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className={styles.Section}>
              <label>Temperamentos</label>
              <select
                onChange={(e) => handleSelect(e)}
                className={styles.styled_select}
              >
                {temperament.map((temp) => {
                  return (
                    <option key={temp} name={temp}>
                      {temp}
                    </option>
                  );
                })}
              </select>

              <div className={styles.sidebar_box}>
                <h4>Temperamento Seleccionado</h4>
                {input.temperament.map((el) => (
                  <div key={el} className={styles.selectedItems}>
                    <p>{el}</p>
                    <button onClick={() => handleDelete(el)}>X</button>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.buttonSection}>
              <NavLink to="/home">
                {" "}
                <button className={styles.buttonCancel}>Cancelar</button>
              </NavLink>
              <button className={styles.button} type="submit">
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
    // </div>
  );
};

export default Create;
