import { Controller, Get, Query, Param } from '@nestjs/common';
import { YoutubeService } from './youtube.service';

@Controller()
export class AppController {
  MAX_RESULTS = 12;

  constructor(private readonly youtubeService: YoutubeService) {}

  @Get('/channels')
  async getChannels(@Query('query') query: string): Promise<any> {
    try {
      let response = await this.youtubeService.searchChannel(query, this.MAX_RESULTS);
      
      return response.data;
    } catch (e) {
      console.log(JSON.stringify(e, null, 2))
    }
  }

  @Get('/channels/:channelId/videos')
  async getVideos(@Param() params, @Query('query') query: string, @Query('max_results') maxResults: number, @Query('pageToken') pageToken: string): Promise<any> {
    try {
      let response = await this.youtubeService
      .searchVideoInChannel(params.channelId, query, maxResults ? maxResults : this.MAX_RESULTS, pageToken);
      
      return response.data;
    } catch (e) {
      console.log(JSON.stringify(e, null, 2))
    }
  }
}
