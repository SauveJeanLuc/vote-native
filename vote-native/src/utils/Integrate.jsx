export async function Integrate(route, body, method='GET', baseUrl = 'http://192.168.0.122:3032/api'){
    console.log(`ROUTING: ${baseUrl}${route}`);
    console.log(`METHOD: ${method}`);
    console.log(`BODY: ${body}`);
    const response = await fetch(`${baseUrl}${route}`, {
        method: `${method}`,
        headers: {
            'Content-Type' : 'application/json'
        },
        body:body
    })

    const data = await response.json();
    console.log(`Response inside: ${data.token}`);

    return data;
}