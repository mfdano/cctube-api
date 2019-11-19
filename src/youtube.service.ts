import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class YoutubeService {

  baseURL: string;
  authKey: string;

  constructor(private readonly httpService: HttpService) {
    this.baseURL = 'https://www.googleapis.com/youtube/v3/search';
    this.authKey = 'AIzaSyB4blLAWWmKyepwWEDw9hOiTYGnhH6NU2I';
  }

  async searchChannel(query: string, maxResults: Number): Promise<AxiosResponse<any>> {
    return await this.httpService.get(this.baseURL, {
      params: {
        part: 'snippet',
        type: 'channel',
        q: query,
        maxResults: maxResults,
        key: this.authKey
      }
    }).toPromise();
  }

  async searchVideoInChannel(channelId: string, query: string, maxResults: Number, pageToken?: string): Promise<AxiosResponse<any>> {
    return await this.httpService.get(this.baseURL, {
      params: {
        part: 'snippet',
        type: 'video',
        channelId: channelId,
        q: query,
        maxResults: maxResults,
        key: this.authKey,
        pageToken: pageToken
      }
    }).toPromise();
  }
}
