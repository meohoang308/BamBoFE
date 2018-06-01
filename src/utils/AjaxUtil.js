import axios from 'axios';
import {HTTPMethods} from './HTTPMethods';
import {HttpStatus} from './HttpStatus';

const AjaxUtil = {

    call(url, method, params, successHandler, errorHandler){       
        let sendingParams = {
            method: method,
            url: url,         
            headers: {
                'Content-Type': 'application/json'
            }
        };
        if(method === HTTPMethods.GET || method === HTTPMethods.DELETE){
            sendingParams = Object.assign({}, sendingParams, {params: params})
        }else{
            sendingParams = Object.assign({}, sendingParams, {data: params});
        }
            axios(sendingParams).then((response) => {
                if (response.status !== HttpStatus.OK) {
                    errorHandler(response);
                }else if(response.status === HttpStatus.OK){
                    successHandler(response);
                }
            })      
    }

};

export default AjaxUtil;
