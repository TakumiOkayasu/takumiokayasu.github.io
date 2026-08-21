# takumiokayasu.github.io

Takumi Okayasuのポートフォリオサイトです。

https://takumiokayasu.github.io

## Stack

- Astro 7
- TypeScript
- Vite+
- pnpm
- GitHub Pages

静的HTMLを生成し、クライアントJavaScriptはテーマ切り替えだけに限定しています。

## Development

Node.js 24.11以降、pnpm 11、[Vite+](https://viteplus.dev/guide/)を使用します。

```sh
vp install
vp run dev
```

品質確認は次の順で実行します。

```sh
vp check
vp run check:astro
vp test
vp run build
```

AstroはViteを内包するため、開発とビルドにはVite+のbuilt-in commandではなく
`vp run dev`と`vp run build`を使用します。

## Content

表示内容は`src/data/*.json`で管理します。型定義は`src/types.ts`、データの公開契約は
`src/data/index.ts`にあります。
