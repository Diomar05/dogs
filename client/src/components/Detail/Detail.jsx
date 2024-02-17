import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [detail, setDetail] = useState({
    imagen: "",
    name: "",
    height: "",
    weight: "",
    years: "",
    temperaments: ""
  });

  let { id } = useParams();
  useEffect(() => {detailsApi();}, []);

  const detailsApi = () => {
    axios
      .get(`http://localhost:3001/dogs/${id}`)
      .then((res) => {
        console.log(res);
        setDetail({
          imagen: res.data.imagen,
          name: res.data.name,
          height: res.data.height || res.data.altura,
          weight: res.data.weight || res.data.peso,
          years: res.data.years || res.data.años,
          temperaments: res.data.temperaments || res.data.temperamento,

        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
       <div>
         <div>
            <img src={detail.imagen} alt="" ></img>
         </div>
         <div>
            <p>{detail.name}</p>
         </div>
         <div>
            <p>Altura: {detail.weight}</p>
            <p>Peso: {detail.height}</p>
            <p>Años de vida: {detail.years}</p>
            <p>Temperamento: {detail.temperaments}</p>
         </div>
       </div>
    </div>
  );
};

export default Detail;
