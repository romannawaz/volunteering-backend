import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDocument } from './schemas/category.schema';

@Controller('categories')
export class CategoriesController {

    constructor(
        private categoriesService: CategoriesService,
    ) { }

    @Get()
    getAll(): Promise<CategoryDocument[]> {
        return this.categoriesService.getAllCategories();
    }
}
