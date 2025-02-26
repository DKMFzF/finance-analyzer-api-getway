# API-Шлюз для проекта Finance Analyzer

_Шлюз преднозначен для проекта Finance Analyzer, но это не означает что он может работать только в окружении этого проекта. Что бы использовать его в другом проекте достаточно определить своё evn окружение_

## Описание
API Gateway – это шлюз, обеспечивающий взаимодействие между клиентами и микросервисами в архитектуре приложения. Он управляет аутентификацией, маршрутизацией запросов, кешированием и логированием.

## Функциональность
- **Маршрутизация запросов** к сервисам аутентификации и пользователей.
- **Логирование запросов**.
- **Обработка ошибок** с централизованным middleware.
- **Ограничение количества запросов** (Rate Limiting) с использованием Redis.
- **Кеширование** ответов от микросервисов.
- **Мониторинг трассировки запросов** через OpenTelemetry.

## Используемые технологии
- **Node.js** + **Express** – основной фреймворк.
- **Axios** – для отправки HTTP-запросов к микросервисам.
- **Redis** – кеширование данных и ограничение частоты запросов.
- **PM2 (Cluster Mode)** – балансировка нагрузки по процессорам.
- **Swagger** – документация API.
- **OpenTelemetry** – трассировка запросов.
- **Helmet** и **Compression** – защита и оптимизация.

## Структура проекта
```
api-gateway/
│── src/
│   ├── config/           # Конфигурационные файлы
│   ├── middleware/       # Middleware (логирование, ошибки, лимиты)
│   ├── monitoring/       # Мониторинг (OpenTelemetry)
│   ├── routes/           # API-маршруты
│   ├── utils/            # Утилиты и константы
│   ├── app.ts            # Основное приложение
│   ├── server.ts         # Запуск сервера
│── docker-compose.yml    # Контейнеризация
│── README.md             # Описание проекта
```

## Установка и запуск
### Локальный запуск
```bash
yarn install
yarn start
```

### Запуск в Docker
```bash
docker-compose up --build
```

## Переменные окружения (.env)
Переменное окружение специально созданно не скрыто. 
```
PORT=5000

AUTH_SERVICE_URL=http://auth-service:3000
AUTH_SERVICE_ROUTE=/auth
AUTH_SERVICE_URL_LOGIN=/login
AUTH_SERVICE_URL_PROTECTED=/protected

USER_SERVICE_URL=http://user-service:4000
USER_SERVICE_ROUTE=/user
USER_SERVICE_URL_REGISTER=/register

REDIS_HOST=redis
REDIS_PORT=6379

SWAGGER_DOCS=/api-docs
```

## API Маршруты
### Аутентификация
- **POST** `/auth/login` – Вход по JWT.
- **GET** `/auth/protected` – Проверка токена (кешируется в Redis).

### Пользовательский сервис
- **POST** `/user/register` – Регистрация пользователя.

## Мониторинг
API Gateway поддерживает трассировку через OpenTelemetry.

## Автор

[Кирилл Дорошев (DKMFzF)](https://vk.com/dkmfzf)

## Лицензия
MIT

