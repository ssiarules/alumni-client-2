
export const getAlumni = () => {
    return function(dispatch) {

        return fetch(`http://localhost:3001/alumnus`)
            .then(res => res.json())
            .then(alumni => dispatch({ type: 'FETCH_ALUMNI_SUCCESS',payload: alumni }));


    };
};

export const createAlumni = (alumniObject) => {
    console.log(alumniObject)
    return dispatch => {
        fetch(`http://localhost:3001/alumnus`,{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ alumni: alumniObject })
        })
            .then(res => res.json())
            .then(alumni => dispatch({
                type: 'ALUMNI_CREATE_SUCCESS',payload: alumni
            }))
    };
};

export const deleteAlumni = id => {
    return dispatch => {
        fetch(`http://localhost:3001/alumnus/${ id }`,{
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(id => dispatch({
                type: "DELETE_ALUMNI_SUCCESS",
                payload: id
            }));
    };
};