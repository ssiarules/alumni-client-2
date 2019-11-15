
export const getAlumni = () => {
    return function(dispatch) {

        return fetch(`http://localhost:3001/alumni`)
            .then(res => res.json())
            .then(alumni => dispatch({ type: 'FETCH_ALUMNI_SUCCESS',payload: alumni }));


    };
};

export const createAlumni = alumniObject => {
    const alumniToCreate = { alumni: alumniObject };
    return dispatch => {
        fetch(`http://localhost:3001/alumni`,{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(alumniToCreate)
        })
            .then(res => res.json())
            .then(alumni => dispatch({
                type: 'ALUMNI_CREATE_SUCCESS',payload: alumni
            })
            );
    };
};

export const deleteAlumni = (id,history) => {
    return dispatch => {
        fetch(`http://localhost:3001/alumni/${ id }`,{
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(id => {
                dispatch({ type: "ALUMNI_DELETE_SUCCESS",payload: id });
                history.push('/alumni');
            });
    };
};