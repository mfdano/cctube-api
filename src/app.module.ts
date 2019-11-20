import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YoutubeService } from './youtube.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    HttpModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'dist'),
    })
  ],
  controllers: [AppController],
  providers: [AppService, YoutubeService],
})
export class AppModule {}
