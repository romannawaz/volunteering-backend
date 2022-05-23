import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { TokenData } from './dto/token-data.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>,
        private jwtService: JwtService,
    ) { }

    public async signIn(data: SignInDto): Promise<TokenData> {
        const user: UserDocument = await this.userModel
            .findOne(data).exec();

        return this._generateToken(user);
    }

    public async getUserById(id: string): Promise<UserDocument> {
        return await this.userModel.findById(id).exec();
    }

    public create(createUserDto: CreateUserDto): TokenData {
        const newUser: UserDocument = new this.userModel(createUserDto);
        newUser.save();

        return this._generateToken(newUser);
    }

    public async update(_id: string, updateUserDto: UpdateUserDto): Promise<TokenData> {
        const updatedUser: UserDocument = await this.userModel
            .findByIdAndUpdate(_id, updateUserDto, { new: true });

        return this._generateToken(updatedUser);
    }

    private _generateToken(user: UserDocument): TokenData {
        const { password, ...payload } = user;

        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}
