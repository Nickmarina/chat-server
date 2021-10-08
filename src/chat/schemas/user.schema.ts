import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ default: "Hello) Let's connect" })
  desription: string;
  @Prop({ default: true })
  online: boolean;
  @Prop({
    default:
      'https://i.pinimg.com/280x280_RS/9e/36/c8/9e36c8ae6b12cd6cec3b1de2591da9e4.jpg',
  })
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
