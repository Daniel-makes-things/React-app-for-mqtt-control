import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'come.repalceLater.myapp',
  appName: 'Digital Garden',
  webDir: 'build',
  server:  {
    url: 'http://24.203.236.176',
    cleartext:true
  }
};

export default config;
