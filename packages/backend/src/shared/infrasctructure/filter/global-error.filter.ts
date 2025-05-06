import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from "@nestjs/common";

@Catch()
class GlobalErrorFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalErrorFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = "Internal server error";

    if (exception instanceof Error) {
      message = exception.message;
    }

    this.logger.error({
      message: "An error occurred",
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

    response.status(statusCode).json({
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
}

export { GlobalErrorFilter };
