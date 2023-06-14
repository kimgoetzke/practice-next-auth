declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
    GOOGLE_ID: string
    GOOGLE_SECRET: string
    COGNITO_IDP_ISSUER_URL: string
    COGNITO_IDP_SECRET: string
    COGNITO_IDP_ID: string
    COGNITO_BROKER_ISSUER_URL: string
    COGNITO_BROKER_ID: string
  }
}