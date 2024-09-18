# rails-react-todo

Rails と React を使用した ToDo アプリケーションです。フロントエンドには ChakraUI を使用しています。

## 技術スタック

- Rails
- React
- ChakuraUI
  - https://v2.chakra-ui.com/getting-started

## ポート番号

- Rails: 3001
- React: 3002

## サーバーの起動

### Rails

```sh
cd todo_api
rails s
```

### React

```sh
cd todo_web
yarn start
```

## エラー解消

### rails new した後に git add でエラー

```
git add todo_api
error: 'todo_api/' does not have a commit checked out
fatal: adding files failed
```

rails フォルダ内の git ファイルを削除する必要がある。

```
$ rm -rf todo_api/.git
```
