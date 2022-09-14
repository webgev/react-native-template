# React Native Template
Mobile app template for a quick start

## Usage
``` 
npx react-native init MyApp --template webgev-mobile-template
```

## Settings 
After creating the project, you need to configure:
1. In the .env file, specify the `SENTRY_DSN` of the project and execute the command `npx @sentry/wizard -i reactNative -p ios android` selecting your project there
2. In the .env file, specify the address of your api in `PROD_API_BASE`, `STAGING_API_BASE` and `DEV_API_BASE`
3. In the `src/lib/size/size.ts` file, use the `setDefaultWidth` function to set the screen width according to the design
4. In the `src/lib/theme/theme.ts` file, set up the theme according to the design


## Functionality

### Logging
For logging use [sentry.io](http://sentry.io)

### The form
The [formik] library is connected for the form (https://formik.org/docs/overview)

### UI components
The library [native-base] (https://nativebase.io) is connected as a UI

### API
Graphql with library [@apollo/client](https://www.apollographql.com/docs/react/)
