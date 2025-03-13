# PositionPal Gateway

This is the gateway for the PositionPal project.

## Pre-requisites

In order for the service to function properly, the following environment variables must be set and available at startup.

| Variable Name                   | Description                                                      |
|---------------------------------|------------------------------------------------------------------|
| `LOCATION_SERVICE_HTTP_URL`     | The endpoint (host + port) of the websocket location service.    |
| `LOCATION_SERVICE_GRPC_URL`     | The endpoint (host + port) of the gRPC location service API.     |
| `NOTIFICATION_SERVICE_GRPC_URL` | The endpoint (host + port) of the gRPC notification service API. |
| `USER_SERVICE_URL`              | The endpoint (host + port) of the gRPC user service API.         |
| `CHAT_SERVICE_URL`              | The endpoint (host + port) of the gRPC chat service API.         |
| `CHAT_SERVICE_HTTP_URL`         | The endpoint (host + port) of the websocket chat service.        |
| `LOCATION_SERVICE_API_VERSION`  | The version of the location service API. Default is v1.          |
| `CHAT_SERVICE_API_VERSION`      | The version of the chat service API. Default is v1.              |

## Development

For testing purposes, `local-deployment` is a git submodule pointing to the repo where local deployment infrastructure is defined.

A plain clone does not initialize submodules. Special care applies.

```bash
git clone --recurse-submodules <URL> <DESTINATION>
```

If you have already cloned the repo, you can initialize the submodule with:

```bash
git submodule update --init --recursive
```

To update the submodule manually to a specific commit:

```bash
cd local-deployment
git fetch
git checkout <COMMIT>
cd ..
git add local-deployment
git commit -m "chore(deps): update local-deployment digest to <COMMIT>"
```

## Documentation

Refer to the [project documentation](https://position-pal.github.io/docs/) for more details on the project.
