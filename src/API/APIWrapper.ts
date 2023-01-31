export async function http (url: string, config: {}): Promise<any> {
    config = {...config, headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "http://localhost:5000",
        "Origin": "http://localhost:5000"
    },
}
    if (localStorage.getItem('token')) {            
        config = {...config, headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
         "Access-Control-Allow-Origin": "http://localhost:5000",
         "Origin": "http://localhost:5000"
        }}

    }        
    config={...config, credentials: 'include', withCredentials: true }
    const request = new Request(url, config);
    
    const response = await fetch(request);
    if (response?.status === 401) {
        window.location.href = 'http://localhost:3000/login';        
    }
    // if (response?.status === 404) {
    //     window.location.href = 'http://localhost:3000/404';
    // }
    const data = await response.json()
    // const data = await response
    // let test = response.headers.get('session')
    //  console.log(test)     
    
    if (typeof data?.access_token == 'string' && data?.access_token.length > 0) {
        localStorage.setItem('token', data.access_token)
        console.log(data)
    }

    if (localStorage.getItem('token') && window.location.pathname === "/login") {
        window.location.href = 'http://localhost:3000/'
    }

    return {data: data, status: response.status}
}


export async function post(url: string, body: {}, config?: {}): Promise<any> {
    // init maybe update later
    const init = {
        method: "POST",
        body: body,
        ...config
    }
    return await http(url, init)
}


export async function get(url: string, config?: {}): Promise<any> {
    // init maybe update later
    const init = {
        method: "GET",
        ...config
    }
    return await http(url, init)
}