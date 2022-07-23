import Config from 'react-native-config';
import * as Yup from 'yup';

const schema = Yup.object({
  PROD_API_BASE: Yup.string().required(),
  STAGING_API_BASE: Yup.string().required(),
  DEV_API_BASE: Yup.string().required(),
  SENTRY_DSN: Yup.string().required(),
});

const schemaValid = schema.validateSync(Config);

if (!schemaValid) {
  throw new Error('schemaValid error');
}

export const defaultConfig = {
  SENTRY_DSN: schemaValid.SENTRY_DSN,
} as const;

export const standConfig = {
  production: {
    API_BASE: schemaValid.PROD_API_BASE,
  },

  staging: {
    API_BASE: schemaValid.STAGING_API_BASE,
  },

  dev: {
    API_BASE: schemaValid.DEV_API_BASE,
  },
} as const;

export type ConfigType = typeof defaultConfig &
  typeof standConfig['production'];
