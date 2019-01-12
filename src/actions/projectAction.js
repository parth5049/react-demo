export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async calls
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      title: project.title,
      content: project.content,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(data => {
      dispatch({
        type: 'CREATE_PROJECT',
        project
      })
    }).catch((error) => {
      console.log(error);
      dispatch({ type: 'CREATE_PROJECT_ERROR', error });
    })
    
  }
}