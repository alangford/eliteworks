
const NAME_ENTERED = 'NAME_ENTERED',
    DESCRIPTION_ENTERED = 'DESCRIPTION_ENTERED',
    IMAGE_ENTERED = 'IMAGE_ENTERED',
    initialState = {
        nameText: '',
        descriptionText: '',
        imageText: ''
};

export default (state = initialState, action) => {
    switch (action.type){
        case NAME_ENTERED:
            return Object.assign({}, state, {nameText: action.nameText});
        case DESCRIPTION_ENTERED:
            return Object.assign({}, state, {descriptionText: action.descriptionText});
        case IMAGE_ENTERED:
            return Object.assign({}, state, {imageText: action.imageText});
        default:
            return state;
    }
};

export function handleProductName(name) {
    return dispatch =>{
        dispatch({
            type: NAME_ENTERED,
            nameText:name.target.value,
        });
    }
}
export function handleProductDescription(desc) {
    return dispatch =>{
        dispatch({
            type: DESCRIPTION_ENTERED,
            descriptionText:desc.target.value
        });
    }
}
export function handleProductImage(image) {
    return dispatch =>{
        dispatch({
            type: IMAGE_ENTERED,
            imageText:image.target.value
        });
    }
}

