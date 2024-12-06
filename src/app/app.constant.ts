import {WeatherIcon} from "./models/weather-icon";

export const WEATHER_ICON: { [key: string]: WeatherIcon | WeatherIcon[]} = {
  SUN: {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4M4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2" opacity=".3"/><g transform="translate(-210 -1)"><path d="M220.5 2.5v2m6.5.5l-1.5 1.5"/><circle cx="220.5" cy="11.5" r="4"/><path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"/></g></g></svg>`,
    color: "goldenrod"
  },
  RAIN: {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.996 21Q8.998 21 7 18.937t-2-5.134q0-1.36.62-2.74q.618-1.38 1.547-2.648q.93-1.269 2.006-2.393q1.077-1.123 2-1.955q.18-.161.393-.249T12 3.731t.434.087t.393.25q.923.83 2 1.954t2.006 2.393t1.548 2.648t.619 2.74q0 3.072-2.003 5.134t-5 2.063M12 20q2.6 0 4.3-1.763T18 13.8q0-1.825-1.513-4.125T12 4.65Q9.025 7.375 7.513 9.675T6 13.8q0 2.675 1.7 4.438T12 20m.217-1.308q.223-.025.35-.154q.125-.128.125-.31q0-.213-.144-.329q-.143-.116-.367-.091q-1.025.075-2.29-.64t-1.566-2.39q-.05-.236-.166-.353t-.296-.117q-.196 0-.334.147t-.083.44q.387 2.082 1.923 2.98t2.848.817"/></svg>`,
    color: "darkblue"
  },
  CLOUDY_AND_SUN: [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4M4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2" opacity=".3"/><g transform="translate(-210 -1)"><path d="M220.5 2.5v2m6.5.5l-1.5 1.5"/><circle cx="220.5" cy="11.5" r="4"/><path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"/></g></g></svg>`,
      color: "goldenrod"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5l1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11l.5-.95A5.469 5.469 0 0 1 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96A7.49 7.49 0 0 0 12 4"/></svg>`,
      color: `gainsboro`
    },
  ],
  LIGHTNING: {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><defs><mask id="letsIconsLightningDuotoneLine0"><g fill="none"><path stroke="#fff" d="m9.556 13.323l-.12-.01c-1.528-.14-2.292-.209-2.535-.732c-.242-.522.198-1.15 1.077-2.407l3.583-5.119c.581-.83.872-1.245 1.123-1.157c.25.089.216.594.15 1.605l-.204 3.049c-.062.92-.092 1.38.172 1.69c.265.31.724.351 1.642.435l.12.01c1.528.14 2.292.209 2.535.732c.242.522-.198 1.15-1.078 2.407l-3.582 5.119c-.581.83-.872 1.245-1.123 1.157c-.25-.089-.216-.594-.15-1.605l.204-3.049c.062-.92.092-1.38-.172-1.69c-.265-.31-.724-.351-1.642-.435Z"/><path stroke="silver" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" d="M18.5 4L17 6h2l-1.5 2m-11 8L5 18h2l-1.5 2"/></g></mask></defs><path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsLightningDuotoneLine0)"/></svg>`,
    color: `gold`
  },
  SNOWING: {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.086l-.646.647a.5.5 0 0 1-.707-.708L7.5 10.293V8.866l-1.236.713l-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882l-.94.542l-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882l-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646l-.884-.237a.5.5 0 1 1 .26-.966l1.848.495l.94-.542l-.882-.237a.5.5 0 1 1 .258-.966l1.85.495L7 8l-1.236-.713l-1.849.495a.5.5 0 1 1-.258-.966l.883-.237l-.94-.542l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237l-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646l-.237-.883a.5.5 0 0 1 .966-.258l.495 1.849l.94.542l-.236-.883a.5.5 0 0 1 .966-.258l.495 1.849l1.236.713V5.707L6.147 4.354a.5.5 0 1 1 .707-.708l.646.647V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.086l.647-.647a.5.5 0 1 1 .707.708L8.5 5.707v1.427l1.236-.713l.495-1.85a.5.5 0 1 1 .966.26l-.236.882l.94-.542l.495-1.85a.5.5 0 1 1 .966.26l-.236.882l1.12-.646a.5.5 0 0 1 .5.866l-1.12.646l.883.237a.5.5 0 1 1-.26.966l-1.848-.495l-.94.542l.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l1.236.713l1.849-.495a.5.5 0 0 1 .259.966l-.883.237l.94.542l1.849-.495a.5.5 0 0 1 .259.966l-.883.237l1.12.646a.5.5 0 0 1-.5.866l-1.12-.646l.236.883a.5.5 0 1 1-.966.258l-.495-1.849l-.94-.542l.236.883a.5.5 0 0 1-.966.258L9.736 9.58L8.5 8.866v1.427l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647v1.086l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5"/></svg>`,
    color: `steelblue`
  },
  LIGHTNING_AND_RAIN: [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><defs><mask id="letsIconsLightningDuotoneLine0"><g fill="none"><path stroke="#fff" d="m9.556 13.323l-.12-.01c-1.528-.14-2.292-.209-2.535-.732c-.242-.522.198-1.15 1.077-2.407l3.583-5.119c.581-.83.872-1.245 1.123-1.157c.25.089.216.594.15 1.605l-.204 3.049c-.062.92-.092 1.38.172 1.69c.265.31.724.351 1.642.435l.12.01c1.528.14 2.292.209 2.535.732c.242.522-.198 1.15-1.078 2.407l-3.582 5.119c-.581.83-.872 1.245-1.123 1.157c-.25-.089-.216-.594-.15-1.605l.204-3.049c.062-.92.092-1.38-.172-1.69c-.265-.31-.724-.351-1.642-.435Z"/><path stroke="silver" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" d="M18.5 4L17 6h2l-1.5 2m-11 8L5 18h2l-1.5 2"/></g></mask></defs><path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsLightningDuotoneLine0)"/></svg>`,
      color: `gold`
  },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.996 21Q8.998 21 7 18.937t-2-5.134q0-1.36.62-2.74q.618-1.38 1.547-2.648q.93-1.269 2.006-2.393q1.077-1.123 2-1.955q.18-.161.393-.249T12 3.731t.434.087t.393.25q.923.83 2 1.954t2.006 2.393t1.548 2.648t.619 2.74q0 3.072-2.003 5.134t-5 2.063M12 20q2.6 0 4.3-1.763T18 13.8q0-1.825-1.513-4.125T12 4.65Q9.025 7.375 7.513 9.675T6 13.8q0 2.675 1.7 4.438T12 20m.217-1.308q.223-.025.35-.154q.125-.128.125-.31q0-.213-.144-.329q-.143-.116-.367-.091q-1.025.075-2.29-.64t-1.566-2.39q-.05-.236-.166-.353t-.296-.117q-.196 0-.334.147t-.083.44q.387 2.082 1.923 2.98t2.848.817"/></svg>`,
      color: "darkblue"
    }],
  FOG: {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="currentColor"><path d="M248 152a40 40 0 0 1-40 40h-64V48a72 72 0 0 1 71.64 64.73A40 40 0 0 1 248 152" opacity=".2"/><path d="M24 120v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0m24-32a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8m32-8a8 8 0 0 0-8 8v104a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m32-32a8 8 0 0 0-8 8v136a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8m110.84 58.34A80 80 0 0 0 144 40a8 8 0 0 0 0 16a63.76 63.76 0 0 1 63.68 57.53a8 8 0 0 0 6.44 7A32 32 0 0 1 208 184h-64a8 8 0 0 0 0 16h64a48 48 0 0 0 14.84-93.66"/></g></svg>`,
    color: `slategray`
  },
  CLOUDY: {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5l1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11l.5-.95A5.469 5.469 0 0 1 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96A7.49 7.49 0 0 0 12 4"/></svg>`,
    color: `lightslategray`
  }
}
