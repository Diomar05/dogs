import React, { useState }from "react";
import { useDispatch } from "react-redux";
import styles from "./SearchBar.module.css";
import { getDogsByName } from "../../redux/actions";

const SearchBar = () => {

  const [dogsState, setDogsState] = useState("");
  const dispatch = useDispatch();

  function handleClick(e){
    e.preventDefault();
   if (dogsState.length === 0) {
    return alert("Por Favor Escribe un nombre para iniciar la Busqueda")
  } else{
    dispatch(getDogsByName(dogsState))
    setDogsState()
  }
}

  return (
    <div className={styles.container}>
      <div className={styles.searchform} >
        <input
          className={styles.searchtext }
          placeholder="Buscar..."
          type="text"
          value={dogsState}
          onChange={(d) => setDogsState(d.target.value)}
        />
        
        <button className={styles.searchbutton} type="submit" onClick={handleClick}>
          <span>Search</span>
        </button>
      </div>
        
    </div>
  );
};

export default SearchBar;
