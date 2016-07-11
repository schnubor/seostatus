import dispatcher from "../dispatcher";

export function fetch(url){
    dispatcher.dispatch({type: "FETCH_DATA"});

    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            dispatcher.dispatch({type: "RECEIVE_DATA", data: JSON.parse(request.responseText)});
            //var data = JSON.parse(request.responseText);
        } else {
            // We reached our target server, but it returned an error
            dispatcher.dispatch({type: "RECEIVE_DATA_ERROR", error: 'Reached the server, but there was an error.'});
        }
    };

    request.onerror = function() {
        dispatcher.dispatch({type: "RECEIVE_DATA_ERROR", error: textStatus});
    };

    request.send();
    /*
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
    */
}
