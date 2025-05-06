import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  BadRequestException,
} from "@nestjs/common";

@Catch(BadRequestException)
class GlobalDomainErrorFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const exceptionResponse = exception.getResponse();

    const statusCode = exception.getStatus();
    const message =
      typeof exceptionResponse === "object" && exceptionResponse["message"]
        ? exceptionResponse["message"]
        : exceptionResponse;

    response.status(statusCode).json({
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
}

export { GlobalDomainErrorFilter };
