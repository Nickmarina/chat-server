import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type MessageDocument = Message & Document;
@Schema()
export class Message {
  time: Date;

  @Prop({ required: true })
  message: string;
  @Prop({ type: 'ObjectId', required: true, ref: 'User' })
  sender_id: string;
  @Prop({ type: 'ObjectId', required: true, ref: 'User' })
  recipient_id: string;
  @Prop({ required: true })
  sender_name: string;
  @Prop({ required: true })
  date: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
