import { Injectable } from '@nestjs/common';
import { JwtService, JwtSignOptions } from "@nestjs/jwt";
import VerifiedResult from "./verified-result.interface";
import SignedObj from "./signed-obj.interface";

@Injectable()
export class SessionService {
  constructor(private readonly jwtService: JwtService) {
  }

  signAsync(payload: SignedObj) {
    return this.jwtService.signAsync(payload)
  }

  verifyAsync(token: string) {
    return this.jwtService.verifyAsync<VerifiedResult>(token)
  }

}
