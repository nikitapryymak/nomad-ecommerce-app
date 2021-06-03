export function isInCart(product, cartItems) {
    return cartItems.find(item => item.id === product.id); // returns obj or UND
}


export async function fetchFromAPI(endpoint, opts) {
    const { method, body } = { method: 'POST', body: null, ...opts }; // sets default case

    const res = await fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, {
        method,
        ...(body && { body: JSON.stringify(body) }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    return data;
}