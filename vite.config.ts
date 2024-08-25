import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

import { firstly } from 'firstly/vite'

import type { KIT_ROUTES } from '$lib/ROUTES'

export default defineConfig({
  plugins: [
    firstly<KIT_ROUTES>({
      kitRoutes: {
        LINKS: { 
          firstly_sign_in: 'ff/auth/sign-in',
          github: 'https://github.com/[owner]/[repo]',
          remult_admin: 'api/admin',
        },
      }
    }),
    sveltekit(),
  ],
})
