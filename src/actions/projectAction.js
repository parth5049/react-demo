export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async calls
    const firestore = getFirestore();
    firestore.collection('projects').add({
      title: project.title,
      content: project.content,
      authorFirstName: 'Parth',
      authorLastName: 'Trivedi',
      authorId: '123',
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