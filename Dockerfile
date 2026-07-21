FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM httpd:2.4

COPY --from=build /app/dist/ /usr/local/apache2/htdocs/

# Enable mod_rewrite and fall back to index.html so vue-router's
# history mode works on deep links / page refreshes.
RUN sed -i '/LoadModule rewrite_module/s/^#//' /usr/local/apache2/conf/httpd.conf && \
    printf '\n<Directory "/usr/local/apache2/htdocs">\n    RewriteEngine On\n    RewriteBase /\n    RewriteCond %%{REQUEST_FILENAME} !-f\n    RewriteCond %%{REQUEST_FILENAME} !-d\n    RewriteRule . /index.html [L]\n</Directory>\n' >> /usr/local/apache2/conf/httpd.conf

EXPOSE 80
