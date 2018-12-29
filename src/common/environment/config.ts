import * as DevConfig from "./config.dev";
import * as StgConfig from "./config.stg";
import * as ProdConfig from "./config.prod";
/** 環境別変数について */
const productionEnv: string = "production";
const stagingEnv: string = "staging";
export let env = DevConfig;
switch (process.env.NODE_ENV) {
  case productionEnv:
    env = ProdConfig;
    break;
  case stagingEnv:
    env = StgConfig;
    break;
  default:
    env = DevConfig;
    break;
}

/** 環境共通の変数宣言 */
export const commonValue: string = "common value";
