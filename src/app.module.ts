import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [ChatModule, MongooseModule.forRoot(`mongodb+srv://user2:user2@cluster0.t1zmx.mongodb.net/chat?retryWrites=true&w=majority`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
