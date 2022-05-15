import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>,
    ) { }

    public async signIn(data: SignInDto): Promise<UserDocument> {
        return this.userModel.findOne(data).exec();
    }

    public create(createUserDto: CreateUserDto): Promise<UserDocument> {
        const newUser: UserDocument = new this.userModel(createUserDto);

        return newUser.save();
    }
}
