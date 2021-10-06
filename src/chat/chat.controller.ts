import { Controller, Body, Param, Get, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.chatService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<User> {
    return this.chatService.getById(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.chatService.create(createUserDto)
  }
}