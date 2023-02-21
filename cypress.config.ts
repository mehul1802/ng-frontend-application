import { loadEnvConfig } from '@next/env';
import { defineConfig } from 'cypress';

const { combinedEnv } = loadEnvConfig(process.cwd());

export default defineConfig({
	env: combinedEnv,
	e2e: {
		setupNodeEvents(on, config) {
			console.log(config); // see everything in here!

			// modify config values
			config.defaultCommandTimeout = 10000;
			config.baseUrl = 'http://localhost:3000';
			// modify env var value
			config.env.ENVIRONMENT = 'dev';

			// IMPORTANT return the updated config object
			return config;
		}
	}
});
