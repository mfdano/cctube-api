"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let YoutubeService = class YoutubeService {
    constructor(httpService) {
        this.httpService = httpService;
        this.baseURL = 'https://www.googleapis.com/youtube/v3/search';
        this.authKey = 'AIzaSyARIP07hkfvu8wABEOszpF-q8BH1X9Ac9Y';
    }
    async searchChannel(query, maxResults) {
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
    async searchVideoInChannel(channelId, query, maxResults, pageToken) {
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
};
YoutubeService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], YoutubeService);
exports.YoutubeService = YoutubeService;
//# sourceMappingURL=youtube.service.js.map