# SmartDisc Website

## How to run

```bash
# development (Vite dev server with hot-reload), http://localhost:5173
docker compose up --build

# production (static build served by Apache), http://localhost:8080
docker compose -f compose.prod.yaml up --build -d
```

Both work with no `.env` file. Override the published port with `HTTP_PORT` if
it's already taken, e.g. `HTTP_PORT=8081 docker compose up --build`.

`compose.prod.yaml` is also the file to point Dockdeploy at.
