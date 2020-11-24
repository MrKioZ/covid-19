
const initialState = {
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    loading: true
}

const casesReducer = (state = initialState, action) => {
    switch (action.type){
        case "CASES":
            return action.payload
        default:
            return state;
    }
};

export default casesReducer;