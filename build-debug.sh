VERSION_TAG=$(<VERSION)
SERVICE_NAME=hmr-service
docker build -f Dockerfile.debug --no-cache=true -t $SERVICE_NAME:$VERSION_TAG .
