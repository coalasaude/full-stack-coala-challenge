import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
  BadRequestException,
} from "@nestjs/common";
import { DomainError } from "src/shared/domain/error/domain.error";

@Catch()
class GlobalErrorFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalErrorFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const responseBody = {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: "Internal server error",
    };

    if (exception instanceof DomainError) {
      Object.assign(responseBody, this.catchDomainError(exception));
    } else if (exception instanceof BadRequestException) {
      Object.assign(responseBody, this.catchBadRequestError(exception));
    }

    this.logger.error({
      message: responseBody.message,
      statusCode: responseBody.statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      body: request.body,
      params: request.params,
      query: request.query,
      headers: request.headers,
      ip: request.ip,
      userAgent: request.headers["user-agent"],
      exception: exception instanceof Error ? exception.stack : exception,
    });

    response.status(responseBody.statusCode).json(responseBody);
  }

  private catchDomainError(exception: DomainError) {
    return {
      statusCode: exception.getStatus(),
      message: exception.getResponse(),
    };
  }

  private catchBadRequestError(exception: BadRequestException) {
    const exceptionResponse = exception.getResponse();

    const statusCode = exception.getStatus();
    const message =
      typeof exceptionResponse === "object" && exceptionResponse["message"]
        ? exceptionResponse["message"]
        : exceptionResponse;

    return {
      statusCode,
      message,
    };
  }
}

export { GlobalErrorFilter };
