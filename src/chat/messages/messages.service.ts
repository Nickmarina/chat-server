import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from '../dto/create-message.dto';
import { Message, MessageDocument } from '../schemas/message.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  // async getAll(senderId: string, resipientId: string): Promise<Message[]> {
  //   return this.messageModel.find(senderId && resipientId);
  // }
  async getAll(): Promise<Message[]> {
    const messages = await this.messageModel.find().exec();
    // const newList = messages.filter((message) => message);
    // messages.map((message) => {
    //   const userMessages = [];
    //   const values = Object.values(message);
    //   for (const value of values){
    //     if (value.includes(id)){
    //       userMessages.push(message);
    //     }
    //   }
    //   return userMessages;
    //   // if (message.sender_id === id || message.recipient_id === id) {
    //   //   const userMessages = [];
    //   //   userMessages.push(message);
    //   //   return userMessages;
    //   // }
    // });
    return messages;
  }

  async create(messageDto: CreateMessageDto): Promise<Message> {
    const newMessage = new this.messageModel(messageDto);
    return newMessage.save();
  }
}
