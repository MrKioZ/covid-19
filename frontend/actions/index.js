import Axios from 'axios';

export const getCases = (dispatch) => {
    Axios.get('http://localhost:8000/api/cases/?format=json')
    .then(response => response.json())
    .then(data => data[0])
    .then(data => {
        dispatch({
            type: 'CASES',
            payload: {
                confirmed: data.confirmed,
                recovered: data.recovered,
                deaths: data.deaths,
                loading: false,
            }
        })
    })
}

export const setCases = (confirmed, recovered, deaths) => {
    return {
        type: 'CASES',
        payload: {
            confirmed:confirmed,
            recovered:recovered,
            deaths:deaths,
            loading: false
        }
    }
}
