export type Plan = {
  name: string;
  price: number;
  videoQuality: string;
  resolution: string;
  deviceList: Device[];
};

export type Device = {
  deviceName: string;
  deviceIcon: string;
};

export const PlansList: Array<Plan> = [
  {
    name: 'Mobile',
    price: 199,
    videoQuality: 'Good',
    resolution: '480p',
    deviceList: [
      {
        deviceName: 'Phone',
        deviceIcon: 'phone-portrait-outline',
      },
      {
        deviceName: 'Tablet',
        deviceIcon: 'tablet-landscape-outline',
      },
    ],
  },
  {
    name: 'Basic',
    price: 499,
    videoQuality: 'Good',
    resolution: '480p',
    deviceList: [
      {
        deviceName: 'Phone',
        deviceIcon: 'phone-portrait-outline',
      },
      {
        deviceName: 'Tablet',
        deviceIcon: 'tablet-landscape-outline',
      },
      {
        deviceName: 'Computer',
        deviceIcon: 'laptop-outline',
      },
      {
        deviceName: 'TV',
        deviceIcon: 'tv-outline',
      },
    ],
  },
  {
    name: 'Standard',
    price: 649,
    videoQuality: 'Better',
    resolution: '1080p',
    deviceList: [
      {
        deviceName: 'Phone',
        deviceIcon: 'phone-portrait-outline',
      },
      {
        deviceName: 'Tablet',
        deviceIcon: 'tablet-landscape-outline',
      },
      {
        deviceName: 'Computer',
        deviceIcon: 'laptop-outline',
      },
      {
        deviceName: 'TV',
        deviceIcon: 'tv-outline',
      },
    ],
  },
  {
    name: 'Premium',
    price: 799,
    videoQuality: 'Best',
    resolution: '4K + HDR',
    deviceList: [
      {
        deviceName: 'Phone',
        deviceIcon: 'phone-portrait-outline',
      },
      {
        deviceName: 'Tablet',
        deviceIcon: 'tablet-landscape-outline',
      },
      {
        deviceName: 'Computer',
        deviceIcon: 'laptop-outline',
      },
      {
        deviceName: 'TV',
        deviceIcon: 'tv-outline',
      },
    ],
  },
];
