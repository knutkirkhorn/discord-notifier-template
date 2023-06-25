# discord-notifier-template

> Template for creating a Discord notifier

It notifies to a Discord channel using [Discord Webhooks](https://discord.com/developers/docs/resources/webhook).

<div align="center">
	<img src="https://raw.githubusercontent.com/knutkirkhorn/discord-notifier-template/main/media/example.png" alt="Template notification example">
</div>

## Usage

### Within a Docker container

```sh
# Build container from source
docker build -t discord-notifier .

# Run container
docker run -d -e DISCORD_WEBHOOK_URL=<URL_HERE> -e discord-notifier
```

### Outside of a Docker container

```sh
# Install
npm install

# Run
npm start
```
