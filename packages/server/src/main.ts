import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from "@nestjs/config";
import {ValidationPipe} from "@nestjs/common";
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import {BisErrorFilter} from './common/filters/bis-error.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    // enableImplicitConversion 这个选项是必须使用的, 详情请看下面的地址
    // https://stackoverflow.com/questions/58377492/query-does-not-transform-to-dto
    transformOptions: { enableImplicitConversion: true },
  }));

  // 统一封装接口异常时返回数据
  app.useGlobalFilters(new BisErrorFilter())
  // 统一封装接口成功时返回数据
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(3000);
}
bootstrap();
