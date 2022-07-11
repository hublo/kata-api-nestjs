import { Injectable } from '@nestjs/common';

@Injectable()
export class AppConfig {
  port: string;
  bypassUser: BypassUser;

  constructor() {
    this.bypassUser = {
      role: this.loadOrDefault('USER_ROLE', ''),
    };
    this.port = this.loadOrDefault('APP_PORT', '3000');
  }

  private loadOrFail(name: string): string {
    const envVar = process.env[name];
    if (envVar === '' || envVar === undefined) {
      throw new UndefinedRequiredEnvVar(name);
    }
    return envVar;
  }

  private loadOrDefault(name: string, defaultValue = '') {
    const envVar = process.env[name];
    if (envVar === '' || envVar === undefined) {
      return defaultValue;
    }
    return envVar;
  }
}

type BypassUser = {
  role: string;
};

class UndefinedRequiredEnvVar extends Error {
  constructor(name: string) {
    super(`${name} is empty, please set the calue`);
  }
}

export const HubloShopConfig = new AppConfig();
