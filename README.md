# Сборка и запуск

- Для локальной разработки, доступен по http://localhost:3000/

```sh
npm run dev
```

- Билд

```sh
npm run build
```

# Запуск docker-compose

Заглушка докер

После запуска доступен по http://localhost:3000/

```sh
docker-compose up
```

Для повторного билда и запуска в случае изменения локальных файлов

```sh
docker-compose up --build
```

# Превью

Ветку `master` можно посмотреть [здесь]()

Превью других веток можно отыскать в соответсвующих пайпланах

# Генерация типов

```sh
npx openapi-typescript http://127.0.0.1:8000/openapi.json --output ./src/api/types/api-types.ts
```
