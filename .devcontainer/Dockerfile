FROM node:lts-bookworm-slim

ENV TZ=Asia/Tokyo \
    LANG=ja_JP.UTF-8 \
    LANGUAGE=ja_JP:ja \
    LC_ALL=ja_JP.UTF-8 \
    DEVCONTAINER=true

RUN apt-get update && apt-get install -y --no-install-recommends \
        ca-certificates \
        git \
        locales \
        openssh-client \
        sudo \
        tzdata \
    && locale-gen ja_JP.UTF-8 \
    && corepack enable \
    && corepack install --global pnpm@11.22.0 \
    && echo "node ALL=(root) NOPASSWD:ALL" > /etc/sudoers.d/node \
    && chmod 0440 /etc/sudoers.d/node \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

USER node
WORKDIR /workspaces
