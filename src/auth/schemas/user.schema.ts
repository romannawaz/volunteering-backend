import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    first_name: string;

    @Prop()
    last_name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    phone: number;

    @Prop()
    cardNumber: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
