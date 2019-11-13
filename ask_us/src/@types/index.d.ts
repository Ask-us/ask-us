declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  const value: any;
  export default value;
}

declare module "*.gif" {
  const value: any;
  export default value;
}

declare module "*.ttf" {
  const value: any;
  export default value;
}

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_KEY: string;
    REACT_APP_AUTH_DOMAIN: string;
    REACT_APP_DATA_BASE_URL: string;
    REACT_APP_PROJECT_ID: string;
    REACT_APP_STORAGE_BUCKET: string;
    REACT_APP_MESSAING_SENDER_ID: string;
    REACT_APP_APP_ID: string;
    REACT_APP_MEASUREMENT_ID: string;
  }
}
