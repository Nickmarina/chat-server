import { Controller, Body, Param, Query, Get, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from '../dto/create-message.dto';
import { Message } from '../schemas/message.schema';
// import { query } from 'express';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  getAll(@Query() query): Promise<Message[]> {
    return this.messagesService.getAll({query});
  }

  @Post()
  create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messagesService.create(createMessageDto);
  }
}
