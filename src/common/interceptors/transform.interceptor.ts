import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'express';

export interface StandardResponse<T> {
  statusCode: number;
  message?: string;
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, StandardResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<StandardResponse<T>> {
    return next.handle().pipe(
      map((data) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const httpResponse = context.switchToHttp().getResponse(); // Se eliminó 'as Response'

        return {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          statusCode: httpResponse.statusCode,
          message: 'Operación exitosa',
          data: data as T,
        } as StandardResponse<T>; // Castea el objeto completo a StandardResponse<T>
      }),
    );
  }
}
