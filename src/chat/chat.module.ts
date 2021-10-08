import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { MessagesController } from './messages/messages.controller';
import { UsersService } from './users/users.service';
import { MessagesService } from './messages/messages.service';
import { User, UserSchema } from './schemas/user.schema';
import { Message, MessageSchema } from './schemas/message.schema';

@Module({
  controllers: [UsersController, MessagesController],
  providers: [UsersService, MessagesService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
})
export class ChatModule {}
