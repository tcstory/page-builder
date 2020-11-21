interface ISession {
  userId: string | number;
}

export {};

declare global {
  namespace Express {
    // Inject additional properties on express.Request
    interface Request {
      session: ISession
    }
  }
}
