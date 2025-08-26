ARG ALPINE_VERSION=3.20.2
FROM alpine:${ALPINE_VERSION}
MAINTAINER redgoose <scripter@me.com>

WORKDIR /app
ENV PORT=80

RUN apk add --no-cache curl nginx

COPY ./dest /app

EXPOSE $PORT

CMD [ "nginx", "-g", "daemon off;" ]
