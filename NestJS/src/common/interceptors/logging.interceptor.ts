import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RES_SUCCESS } from '../decorators/response-success.decorator';

export const responseSuccess = (
  metaData = null,
  message = `Ok`,
  code = 200,
) => {
  if (typeof code !== `number`) code = 200;
  return {
    status: `success`,
    code: code,
    message: message,
    metaData: metaData,
    doc: `api.domain.com/doc`,
  };
};

@Injectable()
export class ResponseSuccessInterceptor implements NestInterceptor {
  constructor(public reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const res = context.switchToHttp().getResponse()
    const code = res.statusCode

    const mes = this.reflector.getAllAndOverride<string>(RES_SUCCESS, [
      context.getHandler(),
      context.getClass(),
    ]);

    return next.handle().pipe(
      map((data) => {
        console.log({ data });
        return responseSuccess(data, mes, code);
      }),
    );
  }
}
