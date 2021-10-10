import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { async } from 'rxjs';
import { CreateMessageDto } from '../dto/create-message.dto';
import { Message, MessageDocument } from '../schemas/message.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async getAll({ query }): Promise<Message[]> {
    console.log(query);
    const messages = await this.messageModel.find().exec();
    const newMessages = messages.filter((message) => {
      const values = Object.values(query);
        for (const value of values) {
          if (
            JSON.stringify(message.sender_id) === JSON.stringify(value) ||
            JSON.stringify(message.recipient_id) === JSON.stringify(value)
          ) {
            return message;
          }
        }
    })
    return newMessages;
  }

  async create(messageDto: CreateMessageDto): Promise<Message> {
    const newMessage = new this.messageModel(messageDto);
    return newMessage.save();
  }
}
