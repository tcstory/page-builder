import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory(configService: ConfigService) {
        return {
          secret: configService.get<string>('jwtSecret'),
          signOptions: {
            expiresIn: '24h'
          }
        }
      },
      inject: [ConfigService],
    }),
  ],
  providers: [SessionService],
  exports: [SessionService],
})
export class SessionModule {}
