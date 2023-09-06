ARG ALPINE_VERSION=3.16.5
FROM alpine:${ALPINE_VERSION}
MAINTAINER redgoose <scripter@me.com>

ENV PORT=5050

WORKDIR /app
COPY ./dest /app

EXPOSE $PORT

# TODO: 나중에 좀더 다듬기
# CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
