## How to introduce
各コンポーネントは1つのJavaScriptファイルにて定義されています。
そのため、使用するコンポーネントだけJSのファイルをローカルにダウンロードしておき、`<head>`内で呼び出しておけば使えます。

1. このリポジトリから必要なJSファイルをダウンロードし、ローカルの`/src/components`フォルダなどに配置しておく
2. 各ページのHTMLファイルの`<head>`タグ内にて以下のようにJSを呼び出す

```html
<script type="module" src="/src/components/popup-wrapper.js" />
```
