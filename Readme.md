# 「ついもどき」E2Eテスト
本リポジトリは[ついもどき](https://github.com/kaidouji85/laravel-tweet-modoki)のE2Eテストです。
ただ、アサーションの類は全くやっておらず、決められた動作をしてスクリーンショットを取っているだけです。
所謂スモークテストを自動的にやる程度のことしかできません。
しかし、これだけでもプロジェクトは相当楽になると思います。

# 動かし方

## 前提条件

* [ついもどき](https://github.com/kaidouji85/laravel-tweet-modoki)がどこかしらで動いている
* ついもどきにログインできるユーザ、パスワードを持っている
* node.jsがインストールされている
* Chromeがインストールされている

## git clone直後に1回だけやること

```shell script
cd <本リポジトリをcloneした場所>
npm install
cp .env.template .env

# .envに自分の環境に適した設定を入力する
```

## ローカル環境で動かす

```shell script
cd <本リポジトリをcloneした場所>
npm start

# ブラウザが立ち上がりテストが始まる
# 各ページのスクリーンショットが自動的に保存される
```
