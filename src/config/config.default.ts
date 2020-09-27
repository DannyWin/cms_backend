import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1601129477768_9389';

  // add your config here
  config.middleware = [];
  config.orm = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'cms',
    synchronize: false,
    logging: false,
 };
  return config;
};
