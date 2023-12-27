// @ts-ignore
import XMLHttpRequest from 'xhr2';

const createPromiseResponse = <T>(xhr: XMLHttpRequest): Promise<T> => {
    return new Promise((resolve, reject) => {
        xhr.onerror = () => {
            reject(new Error('An error occurred during the request.'));
        };
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(
                    JSON.parse(xhr.responseText)
                );
            } else {
                reject(
                    `Error ${xhr.status}: ${xhr.statusText}`
                );
            }
        }
    });
}

export const GET = <T>(url: string, params: Record<string, string> = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url + '?' + new URLSearchParams(params));
    xhr.send();
    return createPromiseResponse<T>(xhr);
}

export const POST = async <T>(url: string, body: Record<string, string> = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(body));
    return createPromiseResponse<T>(xhr);
}

export const PUT = async <T>(url: string, body: Record<string, string>) => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(body));
    return createPromiseResponse<T>(xhr);
}

export const DELETE = async <T>(url: string) => {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', url);
    return createPromiseResponse<T>(xhr);
}
