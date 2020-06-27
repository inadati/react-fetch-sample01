# セットアップ

リポジトリのクローン
```
git clone git@github.com:inadati/react-fetch-sample01.git
```

json-serverのインストール
```
npm i -g json-server
```

json-serverの起動
```
cd react-fetch-sample01/json-server
json-server --watch db.json --port 4000
```

reactの起動

```
cd react-fetch-sample01/app
npm i
npm start
```

# fetchを利用しているItemListコンポーネントへのパス

```
react-fetch-sample01/app/src/components/ItemList.js
```