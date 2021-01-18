export const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            const isExist = state.favorites.find(item => item.id === action.payload.id)
            if (isExist) return { ...state }
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }

        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter(items => items.id !== action.payload)
            };

        default:
            return state;
    }
};

export const initialState = {
    favorites: []
};