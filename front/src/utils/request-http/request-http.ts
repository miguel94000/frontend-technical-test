import { LocalStorage } from 'src/app/entities';

export const createRequestHttp = ({ storage }: { storage: LocalStorage }) => {
    const request = async (url: string, requestInit: RequestInit) => {
        const requestHeader = new Headers(requestInit.headers);

        requestInit.headers = requestHeader;
        const res = await fetch(storage.getBasePath() + url, requestInit);

        return res;
    };
    return {
        get(url: string): Promise<Response> {
            const requestInit: RequestInit = {
                method: 'GET',
                headers: new Headers(),
                mode: 'cors',
                cache: 'default',
            };
            return request(url, requestInit);
        },
        patch(url: string, stringifiedBody: string): Promise<Response> {
            const postHeaders = new Headers();
            postHeaders.append('Content-Type', 'application/json');
            postHeaders.append('Accept', 'application/json');
            const requestInit: RequestInit = {
                method: 'PATCH',
                headers: postHeaders,
                mode: 'cors',
                cache: 'default',
                body: stringifiedBody,
            };
            return request(url, requestInit);

        },
    };
};

export type RequestHttp = ReturnType<typeof createRequestHttp>;
