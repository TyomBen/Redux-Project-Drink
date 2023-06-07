import { URL } from "../../../Utills/constants"

const settingCoctalisData = (payload) => {
    return {
        type : 'DATASET',
        payload : payload
    }
}

export const fetchingData = (valuesearch) => {
    return async (dispatch) => {
        try {
            const responce = await fetch (`${URL}search.php?s=${valuesearch}`)
            const data = await responce.json ();
            const {drinks} = data
            dispatch (settingCoctalisData (drinks))
        } catch (eror) {
            console.log(eror);
        }
    
    }
}