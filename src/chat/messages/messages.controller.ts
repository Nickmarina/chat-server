import { Controller, Body, Param, Get, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from '../dto/create-message.dto';
import { Message } from '../schemas/message.schema';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

//   @Get()
//   getAll(@Body(sender_id:string, resipient_id:string): Promise<Message[]> {
//     return this.messagesService.getAll({sender_id, resipient_id});
//   }

  // @Get()
  // get(@Param('id') id: string): Promise<Message[]> {
  //   return this.messagesService.getMessages(id);
  // }

  @Get()
  getAll(): Promise<Message[]> {
    return this.messagesService.getAll();
  }
  @Post()
  create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messagesService.create(createMessageDto)
  }
}
