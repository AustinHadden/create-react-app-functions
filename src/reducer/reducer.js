import { FETCH_PICTURE_LOADING, FETCH_PICTURE_SUCCESS, FETCH_PICTURE_FAILED } from '../actions'

export const initialState = {
    isLoading: false,
    error: null,
    picture: ""
}

export const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_PICTURE_LOADING:
            return {
                ...state,
                picture: "",
                isLoading: true,
                error: null
            };
            case FETCH_PICTURE_SUCCESS:
                return {
                    ...state,
                    picture: action.payload,
                    isLoading: false,
                    error: null
                };
                case FETCH_PICTURE_FAILED:
                return {
                    ...state,
                    picture: "",
                    isLoading: false,
                    error: action.payload
                };
        default:
            return state;
    }
};