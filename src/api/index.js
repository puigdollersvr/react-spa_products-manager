export const apiGet = (url) => () => fetch(url).then(v => v.json());

/*
 * PUT REQUEST - UPDATE BY QUERY
 * (NOT IN USE) 
 */
export const apiPutByQuery = (url, searchKey, searchValue, data) => () => 
    fetch(
        `${url}/${searchKey}/${searchValue}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
    .then( r => {
        if(r.error) {
            return Promise.reject(new Error(r.message));
        }
        return r;
    });

/*
 * PUT REQUEST - UPDATE BY ID
 */
export const apiPut = (url, id, data) => () => 
    fetch(
        `${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
    .then( r => {
        if(r.error) {
            return Promise.reject(new Error(r.message));
        }
        return r;
    });

/*
 *  POST REQUEST - CREATE PRODUCT
 */
export const apiPost = (url, data) => () => 
    fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
    .then( r => {
        if(r.error) {
            return Promise.reject(new Error(r.message));
        }
        return r;
    });


/*
 *  DELETE REQUEST - REMOVE PRODUCT
 */
export const apiDelete = (url, searchKey, searchValue) => () => 
    fetch(
        `${url}/${searchKey}/${searchValue}`, {
        method: 'DELETE',
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
    .then( r => {
        if(r.error) {
            return Promise.reject(new Error(r.message));
        }
        return r._id;
    });