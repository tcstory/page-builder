import { Injectable } from '@nestjs/common';
import {SessionService} from "../session/session.service";
import { errMap } from "./constants";
import BizError from "../common/custom-error/BizError"

@Injectable()
export class UsersService {
  constructor(private readonly sessionService: SessionService) {
  }


  async login(email: string, password: string) {
    const user = await this.findByEmail(email);

    if (user) {
      if (user.password === password) {
        return this.sessionService.signAsync({
          userId: user.id,
        })
      } else {
        throw new BizError(errMap.incorrectPassword)
      }

    } else {
      throw new BizError(errMap.notFound)
    }
  }

  async getProfile(userId: string) {
    const user = await this.findById(userId)

    if (user) {
      return user
    } else {
      throw new BizError(errMap.userNotExits)
    }
  }

  async findByEmail(email) {
    return Promise.resolve({
      id: 1,
      email: 'tcstory@163.com',
      password: '123456',
    })
  }

  async findById(userId) {
    return Promise.resolve({
      id: 1,
      email: 'tcstory@163.com',
      password: '123456',
    })
  }
}
