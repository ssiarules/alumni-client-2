export default (state = [],action) => {
    switch (action.type) {

        case 'FETCH_ALUMNI_SUCCESS':
            return action.payload;
        case "ALUMNI_CREATE_SUCCESS":
            return [...state,action.payload]
        default:
            return state;
    }
};