import axios from 'axios';


export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";
export const FETCH_SMURFS_START = "FETCH_SMURF_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURF_FAILURE";

// export const addSmurf = (name, position, nickname, summary) => (dispatch) => {
  export const addSmurf = (name, position, nickname, description) => {
  console.log("action creator addSmurf is fired")
  const newSmurf = {
    name: name,
    position: position,
    nickname: nickname,
    description: description,
  }
  console.log("new smurf:", newSmurf)
  return ({type: ADD_SMURF, payload: newSmurf });
}

export const setErrorMessage = (errorMessage) => {
  console.log("action creator setErrorMessage is fired")
  return {type: SET_ERROR, payload: errorMessage };
}

export const fetchSmurfs = () => (dispatch) => {
  
  dispatch ({ type: FETCH_SMURFS_START });

  axios.get(`http://localhost:3333/smurfs`) 
    .then(res => {
        dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log("error: ", err)
        dispatch({ type: FETCH_SMURFS_FAILURE, payload: err });
    })
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.