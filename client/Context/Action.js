export const ADDTOLIST = (item) => ({
    type: 'ADD_TO_LIST',
    payload: item
})

export const REMOVEFROMLIST = (id) => ({
    type: 'REMOVE_FROM_LIST',
    payload: id
})