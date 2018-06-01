import {ActionTypes} from "../utils/ActionTypes";
import {ReduceStore} from "flux/utils";
import AppDispatcher from "../dispatcher/AppDispatcher";

class PeopleStore extends ReduceStore {

    getInitialState() {
        return {
            listPeople: {},            
            people: {},
        };
    }

    reduce(state , action) {
        switch (action.type) {
            case ActionTypes.LIST_PEOPLE:
                return {
                    state, listPeople: action.data, activePage: action.activePage
                };           
            case ActionTypes.GET_PEOPLE_BY_ID:
                return {
                    state, people: action.data,
                };            
            default:
                return state;
        }
    }
}

export default new PeopleStore(AppDispatcher);