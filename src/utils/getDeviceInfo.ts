// /utils/getDeviceInfo.ts

export type Geolocation = {
  country: string;
  region: string;
  city: string;
  isp: string;
  lat: string;
  lon: string;
};

export type DeviceInfo = {
  device: {
    type: string | undefined;
    model: string | undefined;
  };
  os: {
    name: string | undefined;
    version: string | undefined;
  };
  browser: {
    name: string | undefined;
    version: string | undefined;
  };
  cpu: {
    architecture: string | undefined;
  };
};

export type PageProps = {
  ip: string;
  userAgent: string;
  deviceInfo: DeviceInfo;
  geolocation: Geolocation; // Explicitly typing it as Geolocation
};
