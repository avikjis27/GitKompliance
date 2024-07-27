# kompliance

> A GitHub App built with [Probot](https://github.com/probot/probot) that Check audit compliance of github repos

## Quick launch in gitpod

Click the button below to start a new development environment:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/?editor=code-desktop#https://github.com/avikjis27/GitKompliance)

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t kompliance .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> kompliance
```

## Contributing

If you have suggestions for how kompliance could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2024 Avik Chakraborty
