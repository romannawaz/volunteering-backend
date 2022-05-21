import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ProductUsersData } from '../dto/create-product.dto';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  user_info: ProductUsersData;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
