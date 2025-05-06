import { ExceptionFilter, Catch, ArgumentsHost } from "@nestjs/common";
import { DomainError } from "src/shared/domain/error/domain.error";

@Catch(DomainError)
class GlobalDomainErrorFilter implements ExceptionFilter {
  catch(exception: DomainError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = exception.getStatus();

    response.status(statusCode).json({
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.getResponse(),
    });
  }
}

export { GlobalDomainErrorFilter };
