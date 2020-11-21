import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env.local', `.env.${process.env.NODE_ENV}`],
    load: [configuration],
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
