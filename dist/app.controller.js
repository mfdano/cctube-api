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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const youtube_service_1 = require("./youtube.service");
let AppController = class AppController {
    constructor(youtubeService) {
        this.youtubeService = youtubeService;
        this.MAX_RESULTS = 12;
    }
    async getChannels(query) {
        try {
            let response = await this.youtubeService.searchChannel(query, this.MAX_RESULTS);
            return response.data;
        }
        catch (e) {
            console.log(JSON.stringify(e, null, 2));
        }
    }
    async getVideos(params, query, maxResults, pageToken) {
        try {
            let response = await this.youtubeService
                .searchVideoInChannel(params.channelId, query, maxResults ? maxResults : this.MAX_RESULTS, pageToken);
            return response.data;
        }
        catch (e) {
            console.log(JSON.stringify(e, null, 2));
        }
    }
};
__decorate([
    common_1.Get('/channels'),
    __param(0, common_1.Query('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getChannels", null);
__decorate([
    common_1.Get('/channels/:channelId/videos'),
    __param(0, common_1.Param()), __param(1, common_1.Query('query')), __param(2, common_1.Query('max_results')), __param(3, common_1.Query('pageToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Number, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getVideos", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [youtube_service_1.YoutubeService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map