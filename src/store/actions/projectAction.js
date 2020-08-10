export const createProject = (project) => {
  return (dispatch, getState, { getFirestore, getFirebase } ) => {
    // make async call to DB
    dispatch({
      type: 'CREATE_PROJECT',
      project  //this is being send
    });
  }
}