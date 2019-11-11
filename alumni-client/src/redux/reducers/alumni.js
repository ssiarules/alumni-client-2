export default (state = [],action) => {
    switch (action.type) {

        case 'FETCH_ALUMNI_SUCCESS':
            return action.payload
        default:
            return state;
    }
};