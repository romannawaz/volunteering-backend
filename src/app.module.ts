import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Mongoose
import { MongooseModule } from '@nestjs/mongoose';

const _username: string = 'romannawaz';
const _password: string = 'nshn8d-134';
const mongoUri: string = `mongodb+srv://${_username}:${_password}@cluster0.f2lh8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

@Module({
  imports: [MongooseModule.forRoot(mongoUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
