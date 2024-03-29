import axios from "axios";

export function getDogs() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/dogs");
    return dispatch({
      type: "GET_DOGS",
      payload: json.data,
    });
  };
}

export function getTemperamentsList() {
  return async function (dispatch) {
    var temp = await axios.get("http://localhost:3001/temperaments");
    var listaTemperaments = temp.data.map((el) => el.name);
    return dispatch({
      type: "GET_TEMPERAMENTS_LIST",
      payload: listaTemperaments,
    });
  };
}

export function getDogsByName(name) {
  return async function (dispatch) {
    const { data } = await axios.get(
      `http://localhost:3001/dogsname?name=${name}`
    );
    return dispatch({
      type: "GET_DOGS_BY_NAME",
      payload: data,
    });
  };
}

export function postDog(payload) {
  return async function (dispatch) {
    const response = await axios.post("http://localhost:3001/dogs/", payload);
    return response;
  };
}

export function filterDogsByMAXWeight(payload) {
  return {
    type: "FILTER_BY_MAX_WEIGHT",
    payload,
  };
}

export function filterDogsByMINWeight(payload) {
  return {
    type: "FILTER_BY_MIN_WEIGHT",
    payload,
  };
}



export function filterDogsByTemperament(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `http://localhost:3001/temperaments=${payload}`
      );
      return dispatch({
        type: "GET_DOGS_BY_TEMP",
        payload: json.data,
      });
    } catch (error) {
      console.log(error, "Error on the filters in actions file");
    }
  };
}

export function getDetails(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/dogs/${id}`);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error, "Error on the filters in actions file");
    }
  };
}

export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function deleteDetails() {
  return async function (dispatch) {
    return dispatch({
      type: "DELETE_DETAILS",
    });
  };
}

export function orderByName(payload) {
  return {
      type: 'ORDER_BY_NAME',
      payload
  }
}

export function orderByWeight(payload) {
  return {
      type: 'ORDER_BY_WEIGHT',
      payload
  }
}