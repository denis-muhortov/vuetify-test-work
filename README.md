## 💿 Установка

Настройте свой проект, используя предпочитаемый вами менеджер пакетов. Используйте соответствующую команду для установки зависимостей:

| Менеджер пакетов                                              | Команда        |
|---------------------------------------------------------------|----------------|
| [yarn](https://yarnpkg.com/getting-started)                   | `yarn install` |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install)     | `npm install`  |
| [pnpm](https://pnpm.io/installation)                          | `pnpm install` |
| [bun](https://bun.sh/#getting-started)                        | `bun install`  |


## 💡 Использование

В этом разделе рассказывается о том, как запустить сервер разработки и подготовить свой проект к работе.

### Настройка .env

фаил .env находится в корне проекта. По умолчанию:

```bash
VITE_VUE_APP_API_URL='https://dohlmpicjcxrbdqzyxdx.supabase.co/storage/v1/object/public/me-storage/response.json'
```
Его можно спокойно менять на нужный вам адресс запроса, если он будет пустой, то будет использован адрес запроса по умолчанию.

### Запуск сервера разработки

Чтобы запустить сервер разработки с помощью "горячей перезагрузки", выполните следующую команду. Сервер будет доступен по адресу [http://localhost:3000](http://localhost:3000):

```bash
yarn dev
```

(Повторите для npm, pnpm и bun с соответствующими командами.)

### Building for Production

Чтобы собрать проект для production используйте команду:

```bash
yarn build
```

(Повторите для npm, pnpm и bun с соответствующими командами.)

Как только процесс сборки будет завершен, ваше приложение будет готово к развертыванию в производственной среде.

## 📑 License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present Vuetify, LLC
