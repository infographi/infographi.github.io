import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://infographi.github.io',
	integrations: [sitemap()],
	i18n: {
		defaultLocale: "en",
		locales: ["en", "it", "fr"],
		routing: {
			prefixDefaultLocale: false
		}
	}
});
