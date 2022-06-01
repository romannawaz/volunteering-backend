import { Body, Controller, Get, Param, Post } from '@nestjs/common';

// Dto
import { CreateProductDto } from './dto/create-product.dto';

// Services
import { ProductsService } from './products.service';

// Schemas
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {

    constructor(
        private readonly productsService: ProductsService,
    ) { }

    @Get()
    public getAll() {
        return this.productsService.getAll();
    }

    @Get('/:_id')
    public getProductById(
        @Param()
        { _id }: { _id: string },
    ): Promise<Product> {
        return this.productsService.getProductById(_id);
    }

    @Get('/user/:user_id')
    public getProductsByUserId(
        @Param()
        { user_id }: { user_id: string },
    ): Promise<Product[]> {
        return this.productsService.getProductsByUserId(user_id);
    }

    @Post()
    public createProduct(
        @Body()
        createProductDto: CreateProductDto,
    ) {
        return this.productsService.create(createProductDto);
    }
}
