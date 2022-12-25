import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // For preprocessor details, see https://kit.svelte.dev/docs/integrations#preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        "base-uri": ["none"],
        "default-src": ["self"],
        "frame-ancestors": ["none"],
        "img-src": ["self", "data:"],
        "object-src": ["none"],
        // See https://github.com/sveltejs/svelte/issues/6662
        "style-src": ["self", "unsafe-inline"],
        "upgrade-insecure-requests": true,
        "worker-src": ["none"],
      },
      mode: "auto",
    },
  },
};

export default config;
