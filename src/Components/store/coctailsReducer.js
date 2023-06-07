const initialState = {
    data : []
}

export const coctailsReducer = (state = initialState, action) => {
    switch (action.type){
        case 'DATASET' :
            return {
                ...state,
                data : action.payload
            }
            default : return state;
    }
}