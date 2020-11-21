import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {SessionModule} from './session/session.module';
import {UsersModule} from './users/users.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', `.env.${process.env.NODE_ENV}`],
      load: [configuration],
    }),
    SessionModule,
    UsersModule
  ],
  controllers: [],
})
export class AppModule {
}
