import { LocalStorage } from 'src/app/entities';
import fetch, {Headers} from 'node-fetch';

export const createRequestHttp = ({ storage }: { storage: LocalStorage }) => {
    const request = async (url: string, requestInit: any) => {
        const requestHeader = new Headers(requestInit.headers);

        requestInit.headers = requestHeader;
        return await fetch(storage.getBasePath() + url, requestInit);
    };
    return {
        get(url: string, requestInit: RequestInit = {}): Promise<Response> {
            requestInit.method = 'GET';
            requestInit.headers = requestInit.headers ?? new Headers();
            requestInit.mode = requestInit.mode ?? 'cors';
            requestInit.cache = requestInit.cache ?? 'default';
            return request(url, requestInit)
            .then();
        },
        patch(url: string, stringifiedBody: string): Promise<Response> {
            const postHeaders = new Headers();
            postHeaders.append('Content-Type', 'application/json');
            postHeaders.append('Accept', 'application/json');
            const requestInit: RequestInit = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                  },
                mode: 'cors',
                cache: 'default',
                body: stringifiedBody,
            };
            return request(url, requestInit).then();
        },
    };
};

export type RequestHttp = ReturnType<typeof createRequestHttp>;
