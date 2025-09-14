# General Info

This is template project for application on svelte + directus + tailwind + skeleton

# Developing

## Enviroment variables

Edit both `docker-compose.yml` and `frontend/.env` adjusting to your needs;

### Once you've created a project and installed dependencies with `npm i` , build containers with docker:

```sh
docker compose up -d
```

### or just start the frontend server

```sh
cd ./frontend
npm run dev
```

# Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
