import fetch from 'isomorphic-fetch'

export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = data => ({
    type: FETCH_DATA_SUCCESS,
    payload: { data }
});

export const fetchDataError = error => ({
    type: FETCH_DATA_FAILURE,
    payload: { error }
});

export function fetchData() {
    return dispatch => {
        dispatch(fetchDataBegin());
        // console.log('here')
        return fetch("http://localhost:8080/data")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                dispatch(fetchDataSuccess(json.data));
                return json.data;
            })
            .catch(error => dispatch(fetchDataError(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}