import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Category, CategoryDocument } from './schemas/category.schema';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel(Category.name)
        private categoryModel: Model<CategoryDocument>
    ) { }

    public async getAllCategories(): Promise<CategoryDocument[]> {
        return await this.categoryModel.find().exec();
    }
}
