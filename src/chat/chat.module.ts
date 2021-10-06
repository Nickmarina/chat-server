import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  controllers: [ChatController],
  providers: [ChatService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class ChatModule {}
