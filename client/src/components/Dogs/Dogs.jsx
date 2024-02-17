import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Dogs = ({props}) => {

  const { id, imagen, name, temperament } = props;

  return (
    <NavLink to={`/detail/${id}`}>
      <div>
        <img src={imagen} alt="" />
        <div>
          <p>{name}</p>
          <p>{weight}</p>
          <p>
            Temperamento: <p>{temperament}</p>
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default Dogs;
