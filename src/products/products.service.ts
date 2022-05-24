import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name)
        private productModel: Model<ProductDocument>
    ) { }

    public async getAll(): Promise<Product[]> {
        return await this.productModel.find().exec();
    }

    public async getProductById(id: string): Promise<Product> {
        return await this.productModel.findById(id);
    }

    public async create(productDto: CreateProductDto): Promise<Product> {
        const newProduct: ProductDocument = new this.productModel(productDto);

        return newProduct.save();
    }
}
