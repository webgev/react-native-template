import * as Sentry from '@sentry/react-native';
import { Primitive } from '@sentry/types';

import { defaultConfig } from './config';

export enum LOGGING_LEVEL {
  Fatal = 'fatal',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
}

Sentry.init({
  dsn: defaultConfig.SENTRY_DSN,
  tracesSampleRate: 1.0,
  debug: false,
  beforeSend: (event, hint) => {
    // don't send events on dev
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.warn(hint?.originalException ?? hint?.syntheticException);
      return null;
    }
    return event;
  },
});

const createSendToSentry =
  (level: LOGGING_LEVEL) =>
  (error: unknown, args?: Record<string, Primitive>) => {
    Sentry.captureException(error, { level, tags: args });
  };

export class Logger {
  public static info = createSendToSentry(LOGGING_LEVEL.Info);
  public static error = createSendToSentry(LOGGING_LEVEL.Error);
  public static warn = createSendToSentry(LOGGING_LEVEL.Warning);
  public static fatal = createSendToSentry(LOGGING_LEVEL.Fatal);
}

export const loggerWrap = Sentry.wrap;
