import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  getTemperamentsList,
  filterDogsByTemperament,
  orderByName,
  filterCreated,
  filterDogsByMAXWeight,
  filterDogsByMINWeight,
  orderByWeight,
} from "../../redux/actions";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
//   const dispatch = useDispatch();
//   const temperaments = useSelector((state) => state.temperaments)
//   .sort(
//     function (a, b) {
//       if (a < b) return -1;
//       else return 1;
//     }
//   );

const dispatch = useDispatch();
const temperaments = useSelector((state) => state.temperaments) || [];
const allDogs = useSelector((state) => state.allDogs) || [];

  const minWeights = allDogs
    .map((el) => el.weight_min)
    .sort(function (a, b) {
      return a - b;
    });
  const allDogsMinWeights = [...new Set(minWeights)];

  const maxWeights = allDogs
    .map((el) => el.weight_max)
    .sort(function (a, b) {
      return a - b;
    });
  const allDogsMaxWeights = [...new Set(maxWeights)];

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperamentsList());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }

  function handleClickOrder(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  }
  function handleClickOrderWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
  }
  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }
  function handleFilteredByTemp(e) {
    e.preventDefault();
    dispatch(filterDogsByTemperament(e.target.value));
  }

  function handleFilteredMAXWeight(e) {
    e.preventDefault();
    dispatch(filterDogsByMAXWeight(e.target.value));
  }
  function handleFilteredMINWeight(e) {
    e.preventDefault();
    dispatch(filterDogsByMINWeight(e.target.value));
  }

  return (
    <div className={styles.container}>
      <div className={styles}>
        <div className={styles}>
          <h4 className={styles}> Find by filters:</h4>
          <div
            className={styles}
            onClick={(e) => {handleClick(e);}}>
            <span className="material-icons refresh">loop</span>
          </div>
        </div>
        <hr />
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Order by name</h5>
          <select onChange={(e) => {handleClickOrder(e);}}>
            <option defaultValue value="all" hidden>
              Order
            </option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Order by weight</h5>
          <select
            onChange={(e) => {
              handleClickOrderWeight(e);
            }}
          >
            <option defaultValue value="all" hidden>
              Order
            </option>
            <option value="asc">Heaviest 1º</option>
            <option value="desc">Lightest 1º</option>
          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filter by source</h5>
          <select
            onChange={(e) => {
              handleFilterCreated(e);
            }}
          >
            <option defaultValue value="all">
              All Sources             </option>
            <option value="created">Yours </option>
            <option value="inDB">dbase </option>
          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filter by temperament</h5>
          <select onChange={(e) => handleFilteredByTemp(e)}>
            <option value="all">All Temperaments</option>
            {temperaments.map((temp) => {
              return (
                <option value={temp} key={temp}>
                  {temp}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filter by max weight</h5>
          <select onChange={(e) => handleFilteredMAXWeight(e)}>
            <option value="all">All Weights</option>
            {allDogsMaxWeights.map((maxWeight) => {
              return maxWeight ? (
                <option value={maxWeight} key={maxWeight}>
                  {maxWeight} kg
                </option>
              ) : (
                ""
              );
            })}
          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filter by min weight</h5>
          <select onChange={(e) => handleFilteredMINWeight(e)}>
            <option value="all">All Weights</option>
            {allDogsMinWeights.map((minWeight) => {
              return minWeight ? (
                <option value={minWeight} key={minWeight}>
                  {minWeight} kg
                </option>
              ) : (
                ""
              );
            })}
          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Add a Woof</h5>
          <div className={styles.addDog}>
            <NavLink to="/newDog/" className={styles.tooltip}>
              <span className="material-icons">add_circle</span>
              <span className={styles.tooltiptext}>Add your Woof</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
