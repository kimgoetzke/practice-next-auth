declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
    GOOGLE_ID: string
    GOOGLE_SECRET: string
    COGNITO_ISSUER_URL: string
    COGNITO_SECRET: string
    COGNITO_ID: string
  }
}