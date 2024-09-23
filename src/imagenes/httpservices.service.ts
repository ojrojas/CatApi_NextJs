import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpService {
    get(requestInfo: RequestInfo, requestInit?: RequestInit) {
        return fetch(requestInfo, requestInit);
    }
}
