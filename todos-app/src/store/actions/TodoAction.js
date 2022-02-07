export const addTodo = (todo) => {
        return (dispatch, getStore, { getFirestore }) => {
                const fireStore = getFirestore()
                fireStore.collection('todo')
                        .add({
                                ...todo,
                                createdAt: new Date()
                        })
                        .then(() => {
                                console.log('todo-added')
                        })
                        .catch((error) => {
                                console.log(error)
                        })
        }
}
export const onDeleteClick = (note) => {
        return (dispatch, getState, { getFirestore }) => {
                const firestore = getFirestore();
                firestore.collection('todo').doc(note.id).delete()
                        .then(() => {
                                console.log('note deleted');
                        })
                        .catch(err => {
                                console.log(err);
                        })
        }
}