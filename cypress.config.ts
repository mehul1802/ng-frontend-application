import { loadEnvConfig } from '@next/env';
import { defineConfig } from 'cypress';
import { server } from '@/config';

const { combinedEnv } = loadEnvConfig(process.cwd());

export default defineConfig({
	env: combinedEnv,
	e2e: {
		setupNodeEvents(on, config) {
			// modify config values
			config.defaultCommandTimeout = 10000;
			config.baseUrl = server;
			// modify env var value
			config.env.ENVIRONMENT = process.env.NODE_ENV !== 'production' ? 'dev' : 'prod';

			// IMPORTANT return the updated config object
			return config;
		}
	}
});
