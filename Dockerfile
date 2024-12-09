FROM nginx:1.27.3-alpine3.20-slim
COPY html/ /usr/share/nginx/html
RUN if ! grep -q "server_tokens off;" /etc/nginx/conf.d/default.conf; then sed -i '/server {/a \    server_tokens off;' /etc/nginx/conf.d/default.conf; fi