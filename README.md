# AdonisJs
AdonisJs is a Node.js web framework with breath of fresh air and drizzle of elegant syntax on top of it.

## System Requirements
1. Node.js >= 8.0.0
2. npm >= 3.0.0
3. git

## Setup the App
Use the adonis command to install the blueprint

```bash
npm install
```
## Import Database

Create new db on your local, import adonis-mysql.sql(db already with structure and data) to your new db
and don't forget to configure the db connection on .env file

## Run the App

Run the following command to run startup migrations.

```js
adonis serve --dev
```