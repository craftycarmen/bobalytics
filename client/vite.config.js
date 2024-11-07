import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from 'vite-plugin-eslint';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig(({ mode }) => ({
    plugins: [
        react(),
        eslint({
            lintOnStart: true,
            failOnError: mode === "production",
        }),
        commonjs(),
    ],
    server: {
        open: true,
        proxy: {
            '/api': 'http://localhost:3000',
        }
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        }
    }
}));
