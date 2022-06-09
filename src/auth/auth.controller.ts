import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';

import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';
import { TokenData } from './dto/token-data.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument } from './schemas/user.schema';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) { }

    @Get('/user/:id')
    public async getUserById(
        @Param()
        { id }: { id: string }
    ): Promise<{ password: string }> {
        return await this.authService.getUserById(id);
    }

    @Get('/user/password/:id')
    public async getUserPasswordById(
        @Param()
        { id }: { id: string }
    ): Promise<{ password: string }> {
        const user: UserDocument = await this.authService.getUserById(id);
        const { password } = user;

        return { password: password };
    }

    @Post('/sign-in')
    public signIn(
        @Body()
        signInDto: SignInDto,
    ): Promise<TokenData> {
        return this.authService.signIn(signInDto);
    }

    @Post('/sign-up')
    public createUser(
        @Body()
        createUserDto: CreateUserDto,
    ): TokenData {
        return this.authService.create(createUserDto);
    }

    @Post('/contacts/:user_id')
    public addContacts(
        @Param('user_id')
        user_id: string,
        @Body()
        contacts: string[]
    ): Promise<TokenData> {
        return this.authService.addContacts(user_id, contacts);
    }

    @Put('/update/:_id')
    public updateUser(
        @Param()
        { _id }: { _id: string },
        @Body()
        updateUserDto: UpdateUserDto,
    ): Promise<TokenData> {
        return this.authService.update(_id, updateUserDto);
    }
} 
