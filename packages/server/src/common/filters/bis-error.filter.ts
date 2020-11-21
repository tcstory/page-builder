import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';

@Catch(Error)
export class BisErrorFilter implements ExceptionFilter<Error> {
  catch(err: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response
      .status(200)
      .json({
        statusCode: 0,
        message: err.toString()
      });
  }
}
