const ApiReducer = (state = { success: [], }, action) => {
    switch (action.type) {
        case "API_CALL":
            return { success: action.payload };
        default:
            return state;
    }
}
export default ApiReducer