import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';
import {Request} from 'express';
import {Observable} from 'rxjs';
import {SessionService} from "../../session/session.service";

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private readonly sessionService: SessionService) {
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = request.header('token')

    return this.sessionService.verifyAsync(token).then((result) => {
      request.session = {
        userId: result.userId,
      }
      return true
    }).catch(function (err) {
      console.error('ERR FOUND: ', err)
      return false
    })
  }
}
