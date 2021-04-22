import jsonPlaceholder from "../api/JsonPlaceholder";

export const JsonApi = () => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/todos");
    dispatch({
        type: "API_CALL",
        payload: response.data
    });
};
