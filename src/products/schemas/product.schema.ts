import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  amount: number;

  @Prop()
  collected: number;

  @Prop()
  region: string;

  @Prop()
  date: Date;

  @Prop()
  user_id: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
