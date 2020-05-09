function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    throw new Error(response.statusText)
}

function getToken() {
    localStorage.setItem('jwt', 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJyZXp2LmRhcmlhQGdtYWlsLmNvbSIsImlhdCI6MTU4OTAyMTcyNSwic3ViIjoiMjJiYTNiYWYtZjE1ZC00MDlhLWJjMmMtMTYyNDJkYjRiZDA4IiwiZXhwIjoxNTg5MDIzNTI1LCJhdXRob3JpdGllcyI6WyJBRE1JTiIsIlVTRVIiXX0.Ujxyt5W9C9b5JIxZGGYTIpgvtwvwhwmAjnP4NQ17twbq8-42zuetMKG5AhpVsVg4mde05K0SnAPZkF-lVnBvzw');
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
        .catch((error) => {
            return error;
        })
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
        .catch((error) => {
            return error;
        });
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
        .then((response) => response.json())
        .catch((error) => {
            return error;
        })
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
        .then((response) => response.json())
        .catch((error) => {
            return error;
        })
}
