export const apiGet = (url) => () => 
    fetch(url).then(v => v.json())
    .then( r => {
        if(r.error) {
            return Promise.reject(new Error("No se pudieron obtener productos."));
        }
        return r;
    })

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
            let errorMessage = "No se pudo actualizar el producto, el servidor devolvió un error desconocido."
            if (r.status) {
                errorMessage = "No se pudo actualizar el producto, el servidor devolvió un error " + r.status.toString() + "."
            }
            return Promise.reject(new Error(errorMessage));
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
            
            let errorMessage = "No se pudo actualizar el producto, el servidor devolvió un error desconocido."

            if (r.status) {
                errorMessage = "No se pudo actualizar el producto, el servidor devolvió un error " + r.status.toString() + "."
            }
            if (r.message && r.message.keyPattern && r.message.keyPattern.sku ) {
                errorMessage = "No se pudo actualizar el producto, el SKU es inválido o está repetido."
            }
            if (r.message && r.message.errors && r.message.errors.category) {
                errorMessage = "No se pudo actualizar el producto, la categoría no es correcta."
            }

            return Promise.reject(new Error(errorMessage));
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
            
            let errorMessage = "No se pudo actualizar el producto, el servidor devolvió un error desconocido."
            
            if (r.status) {
                errorMessage = "No se pudo actualizar el producto, el servidor devolvió un error " + r.status.toString() + "."
            }
            if (r.message && r.message.keyPattern && r.message.keyPattern.sku ) {
                errorMessage = "No se pudo actualizar el producto, el SKU es inválido o está repetido."
            }
            if (r.message && r.message.errors && r.message.errors.category) {
                errorMessage = "No se pudo actualizar el producto, la categoría no es correcta."
            }

            return Promise.reject(new Error(errorMessage));
        }
        return r;
    });


/*
 * DELETE REQUEST - REMOVE BY QUERY
 * (NOT IN USE) 
 */
export const apiDeleteByQuery = (url, searchKey, searchValue) => () => 
    fetch(
        `${url}/${searchKey}/${searchValue}`, {
        method: 'DELETE',
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
    .then( r => {
        if(r.error) {
            let errorMessage = "No se pudo borrar el producto, el servidor devolvió un error desconocido."
            if (r.status) {
                errorMessage = "No se pudo borrar el producto, el servidor devolvió un error " + r.status.toString() + "."
            }
            return Promise.reject(new Error(errorMessage));
        }
        return r._id;
    });


/*
 *  DELETE REQUEST - REMOVE PRODUCT
 */
export const apiDelete = (url, id) => () => 
    fetch(
        `${url}/${id}`, {
        method: 'DELETE',
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
    .then( r => {
        if(r.error) {
            let errorMessage = "No se pudo borrar el producto, el servidor devolvió un error desconocido."
            if (r.status) {
                errorMessage = "No se pudo borrar el producto, el servidor devolvió un error " + r.status.toString() + "."
            }
            return Promise.reject(new Error(errorMessage));
        }
        return r._id;
    });