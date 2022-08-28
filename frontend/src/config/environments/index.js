import { default as DEVELOPMENT } from "./environment.development";
import { default as PRODUCTION } from "./environment.production";

let ENVIRONMENT = {}

if (process.env.REACT_APP_STAGE === "development") {
  ENVIRONMENT = DEVELOPMENT;
} else if (process.env.REACT_APP_STAGE === "production") {
  ENVIRONMENT = PRODUCTION;
} else {
  ENVIRONMENT = DEVELOPMENT;
}

export default ENVIRONMENT;
