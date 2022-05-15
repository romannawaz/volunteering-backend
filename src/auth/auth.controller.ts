import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';
import { UserDocument } from './schemas/user.schema';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) { }

    @Post('/sign-in')
    public signIn(
        @Body()
        signInDto: SignInDto,
    ) {
        return this.authService.signIn(signInDto);
    }

    @Post('/sign-up')
    public createUser(
        @Body()
        createUserDto: CreateUserDto,
    ): Promise<UserDocument> {
        return this.authService.create(createUserDto);
    }
} 
