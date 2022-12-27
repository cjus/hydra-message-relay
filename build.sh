VERSION_TAG=$(<VERSION)
SERVICE_NAME=hmr-service
SERVICE_HOST=pnxtech
docker buildx build --platform=linux/amd64,linux/arm64 --push --no-cache -t $SERVICE_HOST/$SERVICE_NAME:$VERSION_TAG .
