export const createProject = (project) => {
  return (dispatch, getState, { getFirestore, getFirebase } ) => {
    const firestore = getFirestore(); // it will give firestore reference
    firestore.collection('projects').add({
      ...project, // it will dispaly add element of state
      authorFirstName : 'Roiht',
      authorLastName : 'verma',
      authorId : 123456,
      createdAt: new Date()
    }).then(() => {
       // make async call to DB
    dispatch({
      type: 'CREATE_PROJECT',
      project  //this is being send
    });
    }).catch(err => {
       // make async call to DB
    dispatch({
      type: 'CREATE_PROJECT_ERROR',
      err  //this is being send
    });
    });
  }
}