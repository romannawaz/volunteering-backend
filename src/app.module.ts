import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// Mongoose
import { MongooseModule } from '@nestjs/mongoose';

// Modules
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ProductsModule,
    AuthModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }