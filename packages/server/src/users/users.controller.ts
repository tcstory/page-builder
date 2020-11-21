import {Body, Controller, Get, Post, Query, Session, UseGuards} from '@nestjs/common';
import {LoginDto} from "./dto/login.dto";
import {GetProfileDto} from "./dto/get-profile.dto";
import {UsersService} from "./users.service";
import {SessionGuard} from "../common/guards/session.guard";
import ISession from "../session/session.interface";

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const token = await this.userService.login(dto.email, dto.password)
    return {token}
  }

  @UseGuards(SessionGuard)
  @Get('profile')
  getProfile(@Query() dto: GetProfileDto, @Session() sess: ISession) {
    return this.userService.getProfile(dto.email)
  }
}
