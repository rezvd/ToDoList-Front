function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    throw new Error(response.statusText)
}

function getToken() {
    return 'Bearer ' + localStorage.getItem('jwt');
}

export function get(url) {
    return fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': getToken()
        })
    })
        .then((response) => checkStatus(response))
        .then((response) => response.json())
}

export function post(url, body) {
    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }),
        body: body
    })
        .then((response) => checkStatus(response))
        .then((response) => response.json())
}

export function remove(url) {
    return fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': getToken()
        })
    })
        .then((response) => checkStatus(response))
}

export function update(url, body) {
    return fetch(url, {
        method: 'PATCH',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }),
        body: body
    })
        .then((response) => checkStatus(response))
}
