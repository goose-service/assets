ARG ALPINE_VERSION=3.18.3
FROM alpine:${ALPINE_VERSION}
MAINTAINER redgoose <scripter@me.com>

WORKDIR /app
ENV PORT=5050

RUN apk add --no-cache curl nginx

USER nobody

COPY --chown=nobody ./dest /app

EXPOSE $PORT

CMD [ "nginx", "-g", "daemon off;" ]
