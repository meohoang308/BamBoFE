import {HTTPMethods} from "../utils/HTTPMethods";
import AppDispatcher from "../dispatcher/AppDispatcher";
import {ActionTypes} from "../utils/ActionTypes";
import AjaxUtil from "../utils/AjaxUtil";
import {URIProperty} from "../utils/URIProperty";
import { Alert } from 'antd';
const PeopleActions = {

    getAllPeople(params) {
        const handleSuccess = (response) => {
            AppDispatcher.dispatch({
                type: ActionTypes.LIST_PEOPLE,
                data: response.data,
                activePage: params.page
            });
        };
        const handleError = (response) => {
         return   <Alert
         message="Error"
         description="There was an error when getting data from server."
         type="error"
         showIcon
       />

        };
        AjaxUtil.call(
            URIProperty.getAllPeople(),
            HTTPMethods.GET,
            params,
            handleSuccess,
            handleError
        );
    },     
};
export default PeopleActions;