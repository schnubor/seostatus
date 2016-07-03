import dispatcher from "../dispatcher";
import $ from 'jquery';

export function fetch(url){
    dispatcher.dispatch({type: "FETCH_DATA"});
    $.ajax({
        type: 'GET',
        url: url,
        //url: url + '?jsonp=?',

        error: function(error, textStatus) {
            dispatcher.dispatch({type: "RECEIVE_DATA_ERROR", error: textStatus});
        },
        success: function(resp) {
            dispatcher.dispatch({type: "RECEIVE_DATA", data: resp});
        },
        timeout: 10000
    });
}
