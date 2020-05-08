function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    throw new Error(response.statusText)
}

function getToken() {
    localStorage.setItem('jwt', 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJyZXp2LmRhcmlhQGdtYWlsLmNvbSIsImlhdCI6MTU4ODk3MDk3NCwic3ViIjoiYmZmYmQ3ZmQtOTdmOS00Y2NkLWI0MjctOWY3MTQzMDNjZGZhIiwiZXhwIjoxNTg4OTcyNzc0LCJhdXRob3JpdGllcyI6WyJVU0VSIl19.yQP2uyIg4uGFATiKs22L0WPULCJZ9Syjmx-jCTYPPlQZmBzS0_e93yKTQM6rVurnS0J0yDBp9tI_QyHNopLhEA');
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
