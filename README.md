# Telegram Raw_Json_Message Echo Bot

---

## Overview

This project is a simple yet robust Telegram bot designed to process incoming messages and echo them back in a readable JSON format. The bot can handle various types of messages, including text, media, notes, and more. It also supports splitting long messages to comply with Telegram's character limits and ensures smooth operation with robust error handling.

The bot is designed to run seamlessly on **Cloudflare Workers**, offering a free and scalable environment for hosting.

---

## Features

- **Support for All Message Types**: Handles text, media, notes, and other message formats gracefully.
- **JSON Formatting**: Converts incoming messages into a well-formatted JSON structure for easier debugging or analysis.
- **Message Splitting**: Automatically splits long messages into chunks to meet Telegram's 4096-character limit.
- **Error Handling**: Prevents crashes and logs meaningful errors for easier troubleshooting.
- **Free Hosting**: Compatible with **Cloudflare Workers**, enabling free and scalable deployment.
- **Lightweight**: Minimal dependencies, making it fast and efficient.

---

## Getting Started

### Prerequisites

1. **Telegram Bot Token**: Obtain a bot token by creating a bot through [BotFather](https://t.me/BotFather).
2. **Cloudflare Account**: Set up a free Cloudflare account to use their Workers platform.

---

### Installation and Deployment

#### 1. Clone the Repository
```bash
git clone https://github.com/your-repo-name/telegram-echo-bot.git
cd telegram-echo-bot
```
#### 2. Configure the Bot
Replace the placeholder bot token in the script with your actual Telegram bot token:
```js
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
```
### 3. Deploy to Cloudflare Workers

1. install [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/):
```bash
npm install -g wrangler
```
2. Authenticate with Cloudflare:
```bash
wrangler login
```
3. Deploy the bot:
```bash
wrangler publish
```
Note the generated Worker URL and set it as your bot's webhook using the following command:
```bash
curl -X POST "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=<YOUR_WORKER_URL>"
```
Done!

---

## Usage

1. Start a conversation with your bot on Telegram.
2. Send any type of message (text, media, etc.).
3. The bot will echo back the message content in JSON format.

---

## Cloudflare Workers Benefits

- **Free Plan**: Cloudflare Workers provides 100,000 free requests per day.
- **Scalability**: Automatically scales with traffic.
- **Low Latency**: Serves requests from the edge, ensuring fast responses globally.
- **No Server Management**: Eliminate the need for managing servers or infrastructure.

---
