import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Create = () => {
  const [newDog, setNewDog] = useState({
    imagen: "",
    name: "",
    height: "",
    weigth: "",
    years: "",
  });

  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  const selectedChange = (e) => {
    const { name, value } = e.target;
    setNewDog({...newDog, [name]: value });
  };

  const createNewDog = () => {
    let temperamentId = Object.keys(temperaments);
    axios
      .post(`http://localhost:3001/dogs/`, { newDog, temperamentId })

      .try((res) => {
        console.log(res);
        alert("Perro creado");
      })
      .catch((error) => {
        console.log(error);
        alert("No se pudo crear el perro");
      });

    useEffect(() => {
      axios
        .get(`http://localhost:3001/temperaments`)
        .then((res) => {
          dispatch({
            type: "TEMPERAMENTS",
            payload: res.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  };

  return (
    <div>
 
        
        <form onSubmit={handleSubmit}>
          <div>
            <p>Nombre:
                <input
                  name="name"
                  value={newDog.name}
                  onChange={selectedChange}
                  placeholder="name"
                />
            </p>
          </div>
          <div>
          <p>
            Altura:
                <input
                  name="height"
                  value={newDog.height}
                  onChange={selectedChange}
                  placeholder="height"
                /> cm.
          </p>
          </div>

          <div>
            <p>
                Peso:
                <input
                  name="weigth"
                  value={newDog.weigth}
                  onChange={selectedChange}
                  placeholder="weigth"
                /> kg.
            </p>
          </div>

          <div>
            <p>
                Años de vida:
                <input
                  name="years"
                  value={newDog.years}
                  onChange={selectedChange}
                  placeholder="years"
                />
            </p>
          </div>

          <div>
            <p>
                Temperamentos:
            </p>
            <div>
                {temperaments.map((e)=> (
                    <div>
                        <input
                            type="checkbox"
                            name="temperament"
                            value={e.temperament}
                            id={e.id}
                            useDispatch={
                                dispatch => dispatch( dispatched => dispatch( dispatch( dispatch( dispatch( dispatch( dispatch( dispatch( dispatch ) ) ) ) ) ) ) )
                            }
                        />
                        <label for="temperament">{e.temperament}</label>
                    </div>
                ))}
            </div>
          </div>

          <div>
            <button onClick={createNewDog}>Agregar</button>
          </div>

          
        </form>
        

    </div>
  );
};

export default Create;
