
const alumniReducer = (state = [], action) => {
    switch (action.type) {

        case 'FETCH_ALUMNI_SUCCESS':
            return action.payload;
        case "ALUMNI_CREATE_SUCCESS":
            return [...state,action.payload];
        case "ALUMNI_DELETE_SUCCESS":
            return state.filter(alumni => alumni.id !== action.payload);
        case "ALUMNI_UPDATE_SUCCESS":
            return state.map(alumni => {
                if (alumni.id === action.payload.id) {
                    return action.payload;
                } else {
                    return alumni;
                }
            });
        default:
            return state;
    }
};

export default alumniReducer;