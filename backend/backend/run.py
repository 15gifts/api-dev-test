import uvicorn

from backend.api import app

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=5002)
