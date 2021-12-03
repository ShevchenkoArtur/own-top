import {Body, Controller, Post} from '@nestjs/common';
import {AuthDto} from './dto/auth.dto';

@Controller('auth')
export class AuthController {

  @Post('register')
  async register(@Body() authDto: AuthDto) {

  }

  @Post('login')
  async login(@Body() authDto: AuthDto) {

  }
}
