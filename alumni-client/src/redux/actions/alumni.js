export const getAlumni = () => {
    return function(dispatch) {

        return fetch(`http://localhost:3001/alumnus`)
            .then(res => res.json())
            .then(alumni => dispatch({ type: 'FETCH_ALUMNI_SUCCESS',payload: alumni }));


    };
};