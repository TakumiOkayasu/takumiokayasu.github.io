# Project guidance

## Overview

Astro 7とTypeScriptで構築する静的ポートフォリオサイトです。GitHub Pagesへ
`dist/`をデプロイします。Vite+がformat、lint、type check、testを統合します。

## Commands

```sh
vp install
vp run dev
vp check
vp run check:astro
vp test
vp run build
```

Astroのcommandは`vp run <script>`で実行します。`vp dev`と`vp build`はAstroを
経由しないため使用しません。

## Structure

- `src/pages/`: route entry
- `src/layouts/`: document layout and metadata
- `src/components/`: static UI components
- `src/data/`: content data and typed exports
- `src/styles/`: global design tokens and styles
- `tests/`: data contract tests
- `public/`: images and static files

## Rules

- Contentは`src/data/*.json`で変更し、componentへ直書きしない。
- 基本コンテンツをクライアントJavaScriptへ依存させない。
- 新しいclient-side dependencyは、静的HTML/CSSで解決できない場合だけ追加する。
- `dist/`と`.astro/`は生成物なので手動編集しない。
- dependencyは`vp add`、`vp remove`、`vp upgrade`で変更し、lockfileを同期する。
- formatter設定は`vite.config.ts`へ集約し、個別のformatter設定を追加しない。
- デザイン変更ではkeyboard操作、focus表示、reduced motion、mobile表示を確認する。

## Required verification

報告またはPR作成の前に次をすべて通します。

```sh
vp check
vp run check:astro
vp test
vp run build
git diff --check
```
