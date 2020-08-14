import { CHANGE_SEARCH_FIELD} from './constants.jss'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})