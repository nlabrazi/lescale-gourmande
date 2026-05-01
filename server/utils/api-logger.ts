import { getRequestURL, type H3Event } from "h3";

type LogLevel = "debug" | "info" | "warn" | "error";
type LogMetadata = Record<string, boolean | number | string | null | undefined>;

const APP_NAME = "lescale-gourmande";

type LogInput = {
  message: string;
  statusCode?: number;
  error?: unknown;
  metadata?: LogMetadata;
};

function getErrorFields(error: unknown): LogMetadata {
  if (!error) {
    return {};
  }

  if (error instanceof Error) {
    return {
      error: error.message,
      errorName: error.name,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    };
  }

  return {
    error: String(error),
  };
}

function writeLog(level: LogLevel, event: H3Event, input: LogInput) {
  const payload = {
    app: APP_NAME,
    level,
    route: getRequestURL(event).pathname,
    method: event.node.req.method,
    statusCode: input.statusCode,
    message: input.message,
    timestamp: new Date().toISOString(),
    ...input.metadata,
    ...getErrorFields(input.error),
  };

  const line = JSON.stringify(payload);

  if (level === "error") {
    console.error(line);
    return;
  }

  console.log(line);
}

export function logInfo(event: H3Event, input: LogInput) {
  writeLog("info", event, input);
}

export function logError(event: H3Event, input: LogInput) {
  writeLog("error", event, input);
}
