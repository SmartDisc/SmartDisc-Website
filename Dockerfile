# ---- Development: Vite dev server with HMR ----
FROM node:22-alpine AS dev
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]

# ---- Build: compile the static assets ----
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- Production: static files served by Apache (default target) ----
FROM httpd:2.4 AS prod

COPY --from=build /app/dist/ /usr/local/apache2/htdocs/

# Enable mod_rewrite and fall back to index.html so vue-router's
# history mode works on deep links / page refreshes. ServerName is set
# to silence httpd's FQDN warning on startup.
RUN sed -i '/LoadModule rewrite_module/s/^#//' /usr/local/apache2/conf/httpd.conf && \
    printf '\nServerName localhost\n\n<Directory "/usr/local/apache2/htdocs">\n    RewriteEngine On\n    RewriteBase /\n    RewriteCond %%{REQUEST_FILENAME} !-f\n    RewriteCond %%{REQUEST_FILENAME} !-d\n    RewriteRule . /index.html [L]\n</Directory>\n' >> /usr/local/apache2/conf/httpd.conf

EXPOSE 80
