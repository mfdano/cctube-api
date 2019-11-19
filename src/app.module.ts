import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YoutubeService } from './youtube.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, YoutubeService],
})
export class AppModule {}
