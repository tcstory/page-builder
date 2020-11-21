import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SessionModule} from "../session/session.module";

@Module({
  imports: [SessionModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
