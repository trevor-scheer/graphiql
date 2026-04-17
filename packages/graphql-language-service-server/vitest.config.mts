import { defineConfig } from 'vitest/config';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);

export default defineConfig({
  test: {
    environment: 'node',
    testTimeout: 20000,
    clearMocks: true,
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    include: ['src/**/*.{test,spec}.ts'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/esm/**'],
    server: {
      deps: {
        inline: ['graphql-language-service'],
      },
    },
    alias: [
      {
        find: /^graphql-language-service$/,
        replacement: path.resolve(
          __dirname,
          '../graphql-language-service/src/index.ts',
        ),
      },
      { find: /^graphql$/, replacement: require.resolve('graphql') },
    ],
  },
});
