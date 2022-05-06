import { Body, Controller, Get, Post } from '@nestjs/common';

// Dto
import { CreateProductDto } from './dto/create-product.dto';

// Services
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(
        private readonly productsService: ProductsService,
    ) { }

    @Get()
    public getAll() {
        return this.productsService.getAll();
    }

    @Post()
    public createProduct(
        @Body()
        createProductDto: CreateProductDto,
    ) {
        return this.productsService.create(createProductDto);
    }
}
