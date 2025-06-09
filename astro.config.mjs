// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [
          tailwindcss(),
      ]
  },

  integrations: [
    sentry({
      dsn: "https://fcdb46b36aeb581b7aaed3c6374f7fdf@o4509470295457792.ingest.us.sentry.io/4509470297161729",
      tracesSampleRate: 0,
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 0,
      // Setting this option to true will send default PII data to Sentry.
      // For example, automatic IP address collection on events
      sendDefaultPii: true,
      sourceMapsUploadOptions: {
        project: "javascript-astro",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ]
});