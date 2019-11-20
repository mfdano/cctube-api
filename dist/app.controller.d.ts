import { YoutubeService } from './youtube.service';
export declare class AppController {
    private readonly youtubeService;
    MAX_RESULTS: number;
    constructor(youtubeService: YoutubeService);
    getChannels(query: string): Promise<any>;
    getVideos(params: any, query: string, maxResults: number, pageToken: string): Promise<any>;
}
