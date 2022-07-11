import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppConfig } from '../../../app/app.config';
import { FastifyReply, FastifyRequest } from 'fastify';

@Injectable()
export class BaseGuard implements CanActivate {
  constructor(private readonly config: AppConfig) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = this.getRequest(context);
    if (req.cookies && req.cookies['hublo-session'] !== undefined) {
      return true;
    }
    return false;
  }

  getRequest(context: ExecutionContext): FastifyRequestComplete {
    return context
      .switchToHttp()
      .getRequest<FastifyRequest>() as FastifyRequestComplete;
  }
}

export type FastifyRequestComplete = FastifyRequest & {
  cookies?: Record<string, string>;
};
