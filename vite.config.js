import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	publicDir: 'static',
	plugins: [svelte()]
});
