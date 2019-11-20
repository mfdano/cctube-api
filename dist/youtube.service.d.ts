import { HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
export declare class YoutubeService {
    private readonly httpService;
    baseURL: string;
    authKey: string;
    constructor(httpService: HttpService);
    searchChannel(query: string, maxResults: Number): Promise<AxiosResponse<any>>;
    searchVideoInChannel(channelId: string, query: string, maxResults: Number, pageToken?: string): Promise<AxiosResponse<any>>;
}
