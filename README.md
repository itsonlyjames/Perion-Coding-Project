# Perion Coding Project

A simple server side rendered page that requests data from the Steam API before displaying to the user the requested Steam accounts information (specifically games list and info).

It routes the fetch request via the server (see `/src/routes/+page.server.ts`) after the user has submitted the requested Steam ID in the forms input. The Steam ID is passed via Svelte server actions before being used as the argument for obtaining correct data via Steam API.

## Using create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
